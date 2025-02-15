import { resolve, normalize } from 'node:path'
import { fileURLToPath } from 'node:url'
import { globSync } from 'tinyglobby'

const ROOT = fileURLToPath(import.meta.url)
const r = (p) => normalize(resolve(ROOT, '..', p))

console.log(r('src/node/worker_*.js'))
console.log(
    // this will hang:
    // remove r() or use r(...).replaceAll('\\', '/')
    globSync(r('src/node/worker_*.js'), {
        cwd: r('.'),
        onlyFiles: true,
        expandDirectories: false
    })
)
console.log('RUNNING')