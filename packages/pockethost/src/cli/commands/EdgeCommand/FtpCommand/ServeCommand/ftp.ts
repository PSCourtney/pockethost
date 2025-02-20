import { logger } from '@'
import { MOTHERSHIP_URL, neverendingPromise, tryFetch } from '../../../../..'
import { ftpService } from '../FtpService'

export async function ftp() {
  const { info } = logger()
  info(`Starting`)

  await tryFetch(MOTHERSHIP_URL(`/api/health`), {})

  await ftpService({
    mothershipUrl: MOTHERSHIP_URL(),
  })

  await neverendingPromise()
}
