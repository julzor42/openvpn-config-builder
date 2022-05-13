export type OpenVpnConfigAddress = {
    address: string
    mask: string
}

export type OpenVpnFileOrData = string | {
    embed?: string
    content?: string
}

export type OpenVpnConfigCommon = {
    dev?: 'tun' | 'tap'
    proto?: 'tcp' | 'udp'

    // Cryptography
    ca?: OpenVpnFileOrData
    cert?: OpenVpnFileOrData
    key?: OpenVpnFileOrData
    dh?: OpenVpnFileOrData
    tlsAuth?: string
    cipher?: string

    user?: string
    group?: string

    status?: string
    log?: string
    logAppend?: string
    verb?: number
    mute?: number

    // Flags
    clientToClient?: boolean
    duplicateCn?: boolean
    persistKey?: boolean
    persistTun?: boolean
    explicitExitNotify?: boolean

    custom?: {
        [key: string]: any
    }
}
