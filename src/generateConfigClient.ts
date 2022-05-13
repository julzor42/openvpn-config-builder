import { generateCommon } from './generateCommon'
import { OpenVpnConfigClient } from './types'

export function generateConfigClient(config: OpenVpnConfigClient): string {
    const result: string[] = []

    result.push('client')
    if (config.remote) result.push(`remote ${config.remote.address} ${config.remote.port}`)

    generateCommon(result, config)
    if (config.tlsAuth) result.push(`tls-auth ${config.tlsAuth} 1`)

    // Flags
    if (config.noBind) result.push('nobind')
    if (config.resolveRetry) result.push(`resolve-retry ${config.resolveRetry}`)

    return result.join('\n')
}