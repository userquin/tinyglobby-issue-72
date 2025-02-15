import { resolve, normalize } from 'node:path'
import { fileURLToPath } from 'node:url'
import fg from 'fast-glob'

const ROOT = fileURLToPath(import.meta.url)
const r = (p) => normalize(resolve(ROOT, '..', p))

console.log(r('src/node/worker_*.js'))
console.log(
    fg.sync(r('src/node/worker_*.js'), {
        cwd: r('.'),
        onlyFiles: true,
        expandDirectories: false
    })
)
console.log('RUNNING')