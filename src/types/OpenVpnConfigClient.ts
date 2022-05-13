import { OpenVpnConfigCommon } from '.'

export type OpenVpnConfigClient = OpenVpnConfigCommon & {
    remote?: {
        address: string
        port: number
    }

    noBind?: boolean
    resolveRetry?: number | 'infinite'
}