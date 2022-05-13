import { OpenVpnConfigAddress, OpenVpnConfigCommon } from '.'

export type OpenVpnConfigServer = OpenVpnConfigCommon & {
    server?: OpenVpnConfigAddress
    port?: number

    // routes?: OpenVPNConfigAddress[]
    clientConfigDir?: string

    keepalive?: {
        interval: number
        timeout: number
    }
    maxClients?: number
}
