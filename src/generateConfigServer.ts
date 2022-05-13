import { generateCommon } from './generateCommon'
import { OpenVpnConfigServer } from './types'

export function generateConfigServer(config: OpenVpnConfigServer): string {
    const result: string[] = []

    generateCommon(result, config)
    if (config.tlsAuth) result.push(`tls-auth ${config.tlsAuth} 0`)

    if (config.server) result.push(`server ${config.server.address} ${config.server.mask}`)
    if (config.port) result.push(`port ${config.port}`)

    // if (config.routes) {
    //     for (const route of config.routes) {
    //         result.push(`push "route ${route.address} ${route.mask}"`)
    //     }
    // }

    if (config.clientConfigDir) result.push(`client-config-dir ${config.clientConfigDir}`)

    if (config.keepalive) result.push(`keepalive ${config.keepalive.interval} ${config.keepalive.timeout}`)
    if (config.maxClients) result.push(`max-clients ${config.maxClients}`)

    // Flags
    if (config.clientToClient) result.push('client-to-client')
    if (config.duplicateCn) result.push('duplicate-cn')

    if (config.explicitExitNotify) result.push('explicit-exit-notify 1')

    return result.join('\n')
}
