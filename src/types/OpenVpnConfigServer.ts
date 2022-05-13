import { OpenVPNConfigAddress, OpenVpnConfigCommon } from '.'

export type OpenVpnConfigServer = OpenVpnConfigCommon & {
    server?: OpenVPNConfigAddress
    port?: number

    // routes?: OpenVPNConfigAddress[]
    clientConfigDir?: string

    keepalive?: {
        interval: number
        timeout: number
    }
    maxClients?: number
}
