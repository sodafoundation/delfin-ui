export const Consts = {

    /**
     * Constants to be used for conversion of capacity value in appropriate display values.
     */
    FROM_GiB_CONVERTER: 1073741824,
    TO_GiB_CONVERTER : 1024,
    TO_GB_CONVERTER : 1000,

    /** Unknown placeholder **/
    UNKNOW_PLACEHOLDER: "--",

    /** Display Decimal places **/
    PRECISION_PERCENT: 2,

    /** Common Date and Time Formats **/
    DATE_FORMAT: "yyyy-MM-dd",
    TIME_FORMAT: "hh:mm:ss",
    DATETIME_FORMAT: "yyyy-MM-dd hh:mm:ss",

    /** 窗口输入框长度，按照栅格定义控件宽度，数字x标识占x个格子 **/
    W1: 72,
    W2: 152,
    W3: 232,
    W4: 312,
    W5: 250,
    WSearch: 180,

    SODA_HOST_IP: '',
    SODA_GRAFANA_PORT: '',
    SODA_ALERTMANAGER_PORT: '',
    SODA_PROMETHEUS_PORT: '',
    
    API: {

        DELFIN : {
            'storages' : 'resource-monitor/storages',
            'storagePools' : 'resource-monitor/storage-pools',
            'volumes' : 'resource-monitor/volumes',
            'controllers' : 'resource-monitor/controllers',
            'ports' : 'resource-monitor/ports',
            'disks' : 'resource-monitor/disks',
            'qtrees' : 'resource-monitor/qtrees',
            'filesystems' : 'resource-monitor/filesystems',
            'shares' : 'resource-monitor/shares',
            'quotas' : 'resource-monitor/quotas',
            'alerts' : 'alertmanager/alerts'
        }
    },
    STORAGES: {
        vendors: [
            {
                label: "Test Storage",
                value: 'fake_storage'
            },
            {
                label: "Dell EMC",
                value: 'dellemc'
            },
            {
                label: "Huawei",
                value: 'huawei'
            },
            {
                label: "HPE",
                value: 'hpe'
            },
            {
                label: "H3C",
                value: 'h3c'
            },
            {
                label: "Hitachi",
                value: 'hitachi'
            },
            {
                label: "IBM",
                value: 'ibm'
            },
            {
                label: "INSPUR",
                value: 'inspur'
            },
            {
                label: "MacroSAN",
                value: 'macrosan'
            },
            {
                label: "NetApp",
                value: 'netapp'
            },
            {
                label: "Fujitsu",
                value: 'fujitsu'
            },
            {
                label: "Pure Storage",
                value: 'pure'
            }
        ],
        resources:{
            volumes : ['fake_driver', 'vmax', 'pmax', 'scaleio', 'unity', 'vnx_block', 'vplex', 'oceanstor', '3par', 'unistor_cf', 'primera', 'vsp', 'storwize_svc', 'as5500', 'cmode', 'eternus', 'flasharray', 'msa', 'ds8k', 'macrosan'],
            pools : ['fake_driver', 'vmax', 'pmax', 'scaleio', 'unity', 'vnx_block', 'vplex', 'oceanstor', '3par', 'unistor_cf', 'primera', 'vsp', 'storwize_svc', 'as5500', 'cmode', 'eternus', 'msa', 'hnas', 'ds8k', 'macrosan',],
            controllers : ['fake_driver', 'oceanstor', 'unity', 'vnx_block', 'vplex', '3par', 'unistor_cf', 'primera', 'vsp', 'storwize_svc', 'as5500', 'cmode', 'vmax', 'pmax', 'scaleio', 'eternus', 'flasharray', 'msa', 'hnas', 'ds8k', 'macrosan'],
            ports : ['fake_driver', 'oceanstor', 'unity', 'vnx_block', 'vplex', '3par', 'unistor_cf', 'primera', 'vsp', 'storwize_svc', 'as5500', 'cmode', 'vmax', 'pmax', 'scaleio', 'eternus', 'flasharray', 'msa', 'hnas', 'ds8k', 'macrosan'],
            disks : ['fake_driver', 'oceanstor', 'unity', 'vnx_block', '3par', 'unistor_cf', 'primera', 'vsp', 'storwize_svc', 'as5500', 'cmode', 'vmax', 'pmax', 'scaleio', 'eternus', 'flasharray', 'msa', 'hnas', 'macrosan'],
            qtrees : ['fake_driver', 'oceanstor', 'unity', 'cmode', 'hnas'],
            filesystems : ['fake_driver', 'oceanstor', 'unity', 'cmode', 'hnas'],
            shares: ['fake_driver', 'oceanstor', 'unity', 'cmode', 'hnas'],
            quotas: ['fake_driver', 'oceanstor', 'unity', 'cmode', 'hnas']
        },
        models: {
            'fake_storage' : [
                {
                    label: "Test Storage",
                    value: {
                        name: 'fake_driver',
                        rest: true,
                        ssh: true,
                        cli: true,
                        smis: true,
                        extra: true
                    }
                }
            ],
            'dellemc' : [
                {
                    label: "VMAX",
                    value: {
                        name: 'vmax',
                        rest: true,
                        ssh: false,
                        cli: false,
                        smis: false,
                        extra: true
                    }
                },
                {
                    label: "PowerMAX",
                    value: {
                        name: 'pmax',
                        rest: true,
                        ssh: false,
                        cli: false,
                        smis: false,
                        extra: true
                    }
                },
                {
                    label: "ScaleIO",
                    value: {
                        name: 'scaleio',
                        rest: true,
                        ssh: false,
                        cli: false,
                        smis: false,
                        extra: true
                    }
                },
                {
                    label: "Unity",
                    value: {
                        name: 'unity',
                        rest: true,
                        ssh: false,
                        cli: false,
                        smis: false,
                        extra: false
                    }
                },
                {
                    label: "VNX",
                    value: {
                        name: 'vnx_block',
                        rest: false,
                        ssh: false,
                        cli: true,
                        smis: false,
                        extra: false
                    }
                },
                {
                    label: "VPLEX",
                    value: {
                        name: 'vplex',
                        rest: true,
                        ssh: false,
                        cli: false,
                        smis: false,
                        extra: false
                    }
                }
            ],
            'huawei' : [
                {
                    label: "OceanStor V3",
                    value: {
                        name: 'oceanstor',
                        rest: true,
                        ssh: false,
                        cli: false,
                        smis: false,
                        extra: false
                    }
                }
            ],
            'h3c' : [
                {
                    label: "H3C UniStor",
                    value: {
                        name: 'unistor_cf',
                        rest: true,
                        ssh: true,
                        cli: false,
                        smis: false,
                        extra: false
                    }
                }
            ],
            'hpe' : [
                {
                    label: "3PAR",
                    value: {
                        name: '3par',
                        rest: true,
                        ssh: true,
                        cli: false,
                        smis: false,
                        extra: false
                    }
                },
                {
                    label: "PRIMERA",
                    value: {
                        name: 'primera',
                        rest: true,
                        ssh: true,
                        cli: false,
                        smis: false,
                        extra: false
                    }
                },
                {
                    label: "MSA",
                    value: {
                        name: 'msa',
                        rest: false,
                        ssh: true,
                        cli: false,
                        smis: false,
                        extra: false
                    }
                }
            ],
            'hitachi' : [
                {
                    label: "VSP",
                    value: {
                        name: 'vsp',
                        rest: true,
                        ssh: false,
                        cli: false,
                        smis: false,
                        extra: false
                    }
                },
                {
                    label: "HNAS",
                    value: {
                        name: 'hnas',
                        rest: false,
                        ssh: true,
                        cli: false,
                        smis: false,
                        extra: false
                    }
                }
            ],
            'ibm' : [
                {
                    label: "Storwize / SVC",
                    value: {
                        name: 'storwize_svc',
                        rest: false,
                        ssh: true,
                        cli: false,
                        smis: false,
                        extra: false
                    }
                },
                {
                    label: "DS8000",
                    value: {
                        name: 'ds8k',
                        rest: true,
                        ssh: false,
                        cli: false,
                        smis: false,
                        extra: false
                    }
                }
            ],
            'inspur' : [
                {
                    label: "AS5500/AS5300/AS2600/AS2200",
                    value: {
                        name: 'as5500',
                        rest: false,
                        ssh: true,
                        cli: false,
                        smis: false,
                        extra: false
                    }
                }
            ],
            'macrosan' : [
                {
                    label: "MacroSAN",
                    value: {
                        name: 'macrosan',
                        rest: false,
                        ssh: true,
                        cli: false,
                        smis: false,
                        extra: false
                    }
                }
            ],
            'netapp' : [
                {
                    label: "Cluster Mode",
                    value: {
                        name: 'cmode',
                        rest: false,
                        ssh: true,
                        cli: false,
                        smis: false,
                        extra: false
                    }
                }
            ],
            'fujitsu' : [
                {
                    label: "ETERNUS",
                    value: {
                        name: 'eternus',
                        rest: false,
                        ssh: true,
                        cli: false,
                        smis: false,
                        extra: false
                    }
                }
            ],
            'pure' : [
                {
                    label: "FlashArray",
                    value: {
                        name: 'flasharray',
                        rest: true,
                        ssh: false,
                        cli: false,
                        smis: false,
                        extra: false
                    }
                }
            ]
        },
        pubKeyTypeOptions: [
            {
                label: "ssh-ed25519",
                value: "ssh-ed25519"
            },
            {
                label: "ecdsa-sha2-nistp256",
                value: "ecdsa-sha2-nistp256"
            },
            {
                label: "ecdsa-sha2-nistp384",
                value: "ecdsa-sha2-nistp384"
            },
            {
                label: "ecdsa-sha2-nistp521",
                value: "ecdsa-sha2-nistp521"
            },
            {
                label: "ssh-rsa",
                value: "ssh-rsa"
            },
            {
                label: "ssh-dss",
                value: "ssh-dss"
            }
        ],
        alertSourceVersionOptions: [
            {
                label: "SNMPV2C",
                value: 'SNMPv2c'
            },
            {
              label: "SNMPV3",
              value: 'SNMPv3'
            }
        ],
        securityLevelOptions: [
            {
                label: "noAuthnoPriv",
                value: "noAuthnoPriv"
            },
            {
                label: "authNoPriv",
                value: "authNoPriv"
            },
            {
                label: "authPriv",
                value: "authPriv"
            }
        ],
        authProtocolOptions: [
            {
                label: "HMACSHA",
                value: "HMACSHA"
            },
            {
                label: "HMACMD5",
                value: "HMACMD5"
            },
            {
                label: "HMCSHA2224",
                value: "HMCSHA2224"
            },
            {
                label: "HMCSHA2256",
                value: "HMCSHA2256"
            },
            {
                label: "HMCSHA2384",
                value: "HMCSHA2384"
            },
            {
                label: "HMCSHA2512",
                value: "HMCSHA2512"
            }

        ],
        privacyProtocolOptions: [
            {
                label: "DES",
                value: "DES"
            },
            {
                label: "AES",
                value: "AES"
            },
            {
                label: "AES192",
                value: "AES192"
            },
            {
                label: "AES256",
                value: "AES256"
            },
            {
                label: "3DES",
                value: "3DES"
            },


        ]
    },
}

