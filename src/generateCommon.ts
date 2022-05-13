import { OpenVpnConfigCommon, OpenVpnFileOrData } from './types'
import fs from 'fs'

function resolveFileOrData(result: string[], key: string, data: OpenVpnFileOrData) {
    if (typeof (data) === 'string')
        result.push(`${key} ${data}`)
    else {
        result.push(`<${key}>`)
        if (data.embed)
            result.push(fs.readFileSync(data.embed).toString())
        else if (data.content)
            result.push(data.content)
        result.push(`</${key}>`)
    }
}

export function generateCommon(result: string[], config: OpenVpnConfigCommon) {
    if (config.dev) result.push(`dev ${config.dev}`)
    if (config.proto) result.push(`proto ${config.proto}`)

    if (config.ca) resolveFileOrData(result, 'ca', config.ca)
    if (config.cert) resolveFileOrData(result, 'cert', config.cert)
    if (config.key) resolveFileOrData(result, 'key', config.key)
    if (config.dh) resolveFileOrData(result, 'dh', config.dh)
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