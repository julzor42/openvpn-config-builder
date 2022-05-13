export type OpenVPNConfigAddress = {
    address: string
    mask: string
}

export type OpenVpnConfigCommon = {
    dev?: 'tun' | 'tap'
    proto?: 'tcp' | 'udp'

    // Cryptography
    ca?: string
    cert?: string
    key?: string
    dh?: string
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
