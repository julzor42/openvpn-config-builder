import { OpenVpnConfigCommon } from './types'

export function generateCommon(result: string[], config: OpenVpnConfigCommon) {
    if (config.dev) result.push(`dev ${config.dev}`)
    if (config.proto) result.push(`proto ${config.proto}`)

    if (config.ca) result.push(`ca ${config.ca}`)
    if (config.cert) result.push(`cert ${config.cert}`)
    if (config.key) result.push(`key ${config.key}`)
    if (config.dh) result.push(`dh ${config.dh}`)
    if (config.cipher) result.push(`cipher ${config.cipher}`)

    if (config.persistKey) result.push('persist-key')
    if (config.persistTun) result.push('persist-tun')

    // Logging
    if (config.status) result.push(`status ${config.status}`)
    if (config.log) result.push(`log ${config.log}`)
    if (config.logAppend) result.push(`log-append ${config.logAppend}`)
    if (config.verb !== undefined) result.push(`verb ${config.verb}`)
    if (config.mute) result.push(`mute ${config.mute}`)

    if (config.user) result.push(`user ${config.user}`)
    if (config.group) result.push(`user ${config.group}`)

    if (config.custom) {
        for (const [key, value] of Object.entries(config.custom)) {
            result.push(`${key} ${value}`)
        }
    }
}