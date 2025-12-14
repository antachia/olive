import fs from 'node:fs/promises'
import path from 'node:path'

const projectRoot = process.cwd()

const srcDir = path.join(projectRoot, 'node_modules', 'three', 'examples', 'jsm', 'libs', 'draco')
const destDir = path.join(projectRoot, 'public', 'draco')

const filesToCopy = [
  'draco_decoder.js',
  'draco_decoder.wasm',
  'draco_wasm_wrapper.js',
]

async function fileExists(filePath) {
  try {
    await fs.access(filePath)
    return true
  } catch {
    return false
  }
}

async function main() {
  const missing = []

  await fs.mkdir(destDir, { recursive: true })

  for (const fileName of filesToCopy) {
    const from = path.join(srcDir, fileName)
    const to = path.join(destDir, fileName)

    if (!(await fileExists(from))) {
      missing.push(from)
      continue
    }

    await fs.copyFile(from, to)
  }

  if (missing.length) {
    console.warn('[copy-draco] Missing Draco decoder files:')
    for (const m of missing) console.warn(`- ${m}`)
    process.exitCode = 1
    return
  }

  console.log(`[copy-draco] Copied Draco decoders to ${path.relative(projectRoot, destDir)}`)
}

main().catch((err) => {
  console.error('[copy-draco] Failed:', err)
  process.exitCode = 1
})
