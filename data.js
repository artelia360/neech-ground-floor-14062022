var APP_DATA = {
  "scenes": [
    {
      "id": "0-c002-corridor-1",
      "name": "C0.02 Corridor 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 864,
      "initialViewParameters": {
        "yaw": 1.7479696505363869,
        "pitch": 0.08000317104799493,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": 1.4179891985026796,
          "pitch": 0.09744518356977494,
          "rotation": 4.71238898038469,
          "target": "1-201-sub-wait"
        },
        {
          "yaw": 1.7518202054994347,
          "pitch": 0.03415958101736294,
          "rotation": 0,
          "target": "2-c002-corridor-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-201-sub-wait",
      "name": "2.01 Sub Wait",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 864,
      "initialViewParameters": {
        "yaw": -1.2299055524907203,
        "pitch": 0.11318908307950792,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": 1.7123150626427215,
          "pitch": 0.19634347527649254,
          "rotation": 0,
          "target": "0-c002-corridor-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-c002-corridor-2",
      "name": "C0.02 Corridor 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 864,
      "initialViewParameters": {
        "yaw": -0.9228367743334775,
        "pitch": 0.08357463843728574,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": 1.5358650507327312,
          "pitch": 0.14886311797379292,
          "rotation": 0,
          "target": "3-208-tia-clinic-room"
        },
        {
          "yaw": 0.5109914271138951,
          "pitch": 0.2591646606393265,
          "rotation": 0,
          "target": "4-209-bookable-clinic-room"
        },
        {
          "yaw": 2.1859463815017888,
          "pitch": 0.09419739594717491,
          "rotation": 0,
          "target": "0-c002-corridor-1"
        },
        {
          "yaw": -1.591494308326567,
          "pitch": 0.19335702117487763,
          "rotation": 0,
          "target": "5-205-orthotics-clinical-room"
        },
        {
          "yaw": -0.9691673140986197,
          "pitch": 0.1832197947467158,
          "rotation": 0,
          "target": "6-c002-corridor-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-208-tia-clinic-room",
      "name": "2.08 TIA Clinic Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 864,
      "initialViewParameters": {
        "yaw": -1.0983554456619018,
        "pitch": 0.09740711673609681,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": 2.2631763551904793,
          "pitch": 0.09233444805451718,
          "rotation": 0,
          "target": "2-c002-corridor-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-209-bookable-clinic-room",
      "name": "2.09 Bookable Clinic Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -1.3811580698261743,
        "pitch": 0.08574037928283573,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": 1.5487894570871301,
          "pitch": 0.08270711789909058,
          "rotation": 0,
          "target": "2-c002-corridor-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-205-orthotics-clinical-room",
      "name": "2.05 Orthotics Clinical Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -0.8283355561635002,
        "pitch": 0.022046151228742872,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": 2.1318100383067318,
          "pitch": 0.21088423025194558,
          "rotation": 0,
          "target": "2-c002-corridor-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-c002-corridor-3",
      "name": "C0.02 Corridor 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -1.037407077279104,
        "pitch": 0.15074355055308786,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": 2.0370337280242934,
          "pitch": 0.06375855380366424,
          "rotation": 0,
          "target": "2-c002-corridor-2"
        },
        {
          "yaw": -1.0854004619089803,
          "pitch": 0.17271805637711068,
          "rotation": 0,
          "target": "11-c003-corridor-1"
        },
        {
          "yaw": -0.12812266344601042,
          "pitch": 0.19564291506982556,
          "rotation": 0,
          "target": "10-206-orthotics-office"
        },
        {
          "yaw": 0.8809971373064762,
          "pitch": 0.18233461033035958,
          "rotation": 0,
          "target": "7-210-cleaner-store"
        },
        {
          "yaw": -2.906029531363103,
          "pitch": 0.12392285662978964,
          "rotation": 0,
          "target": "9-211-orthotics-workshop"
        },
        {
          "yaw": -2.6677509382356916,
          "pitch": 0.20184200381113548,
          "rotation": 1.5707963267948966,
          "target": "8-207-orthotics-store"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-210-cleaner-store",
      "name": "2.10 Cleaner Store",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -2.1630741224779158,
        "pitch": 0.0050552624914317335,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": 0.5643006229349972,
          "pitch": 0.21859173969572687,
          "rotation": 0,
          "target": "6-c002-corridor-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-207-orthotics-store",
      "name": "2.07 Orthotics Store",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -0.12351362195447457,
        "pitch": 0.07810858038948965,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": 2.255492355384076,
          "pitch": 0.18050267245477514,
          "rotation": 0,
          "target": "6-c002-corridor-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-211-orthotics-workshop",
      "name": "2.11 Orthotics Workshop",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -0.9826744303368233,
        "pitch": 0.1170656019070293,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": 2.3370461699416616,
          "pitch": 0.16916014410189995,
          "rotation": 0,
          "target": "6-c002-corridor-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-206-orthotics-office",
      "name": "2.06 Orthotics Office",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -0.8261236062489932,
        "pitch": 0.12439329493110307,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": 1.9063300581147171,
          "pitch": 0.13566009338535068,
          "rotation": 0,
          "target": "6-c002-corridor-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-c003-corridor-1",
      "name": "C0.03 Corridor 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -0.8789428011931388,
        "pitch": 0.20718158261303898,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": 2.163544098830375,
          "pitch": 0.08248624550458494,
          "rotation": 0,
          "target": "6-c002-corridor-3"
        },
        {
          "yaw": 1.6739123007419057,
          "pitch": 0.14183456505155867,
          "rotation": 0,
          "target": "12-212-neuro-treatment-room"
        },
        {
          "yaw": 0.4686585952086624,
          "pitch": 0.23275990099232047,
          "rotation": 0,
          "target": "13-213-neuro-treatment-room"
        },
        {
          "yaw": -2.5052840370798855,
          "pitch": 0.17667219387671906,
          "rotation": 0,
          "target": "17--c003-corridor-3"
        },
        {
          "yaw": -0.963417311432698,
          "pitch": 0.16666267804487944,
          "rotation": 0,
          "target": "14-c003-corridor-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-212-neuro-treatment-room",
      "name": "2.12 Neuro Treatment Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -2.7708770437590786,
        "pitch": 0.10359650991381741,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": 0.2636884238718764,
          "pitch": 0.19737437342826425,
          "rotation": 0,
          "target": "11-c003-corridor-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-213-neuro-treatment-room",
      "name": "2.13 Neuro Treatment Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 0.013425609630726143,
        "pitch": 0.0893295114388728,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": 2.9825763731914723,
          "pitch": 0.1885338319027987,
          "rotation": 0,
          "target": "11-c003-corridor-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-c003-corridor-2",
      "name": "C0.03 Corridor 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -0.9590328622372795,
        "pitch": 0.11120707647843098,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": -0.41231756849524714,
          "pitch": 0.19029314496114402,
          "rotation": 0,
          "target": "16-215-neuro-treatment-room"
        },
        {
          "yaw": 1.4824432086374895,
          "pitch": 0.17777094757492407,
          "rotation": 0,
          "target": "15-214-neuro-treatment-room"
        },
        {
          "yaw": 2.109307974981556,
          "pitch": 0.07095033113308702,
          "rotation": 0,
          "target": "11-c003-corridor-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-214-neuro-treatment-room",
      "name": "2.14 Neuro Treatment Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -0.9384957722915264,
        "pitch": 0.13778856724871602,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": 2.0076124092293046,
          "pitch": 0.11956176135087837,
          "rotation": 0,
          "target": "14-c003-corridor-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-215-neuro-treatment-room",
      "name": "2.15 Neuro Treatment Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -0.6672527986470627,
        "pitch": 0.07630229102069919,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": 2.211344713117411,
          "pitch": 0.144948129985627,
          "rotation": 0,
          "target": "14-c003-corridor-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17--c003-corridor-3",
      "name": " C0.03 Corridor 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -0.7472960485177502,
        "pitch": 0.13976165829219767,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": 2.461204286602122,
          "pitch": 0.11638508130950243,
          "rotation": 0,
          "target": "14-c003-corridor-2"
        },
        {
          "yaw": -2.4921539257877487,
          "pitch": 0.16946105926668764,
          "rotation": 0,
          "target": "19-218-patient-wc-accessible"
        },
        {
          "yaw": -1.5455724153440897,
          "pitch": 0.19001946461815677,
          "rotation": 0,
          "target": "20-219-patient-wc-accessible"
        },
        {
          "yaw": 0.9849336417398575,
          "pitch": 0.18579940497487968,
          "rotation": 0,
          "target": "18--216-neuro-gym"
        },
        {
          "yaw": -0.7041487642907605,
          "pitch": 0.1910123949277196,
          "rotation": 0,
          "target": "21--c003-corridor-4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18--216-neuro-gym",
      "name": " 2.16 Neuro Gym",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -0.2564291439468587,
        "pitch": 0.15260458204140193,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": 2.231773009219527,
          "pitch": 0.1851530219710611,
          "rotation": 0,
          "target": "17--c003-corridor-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-218-patient-wc-accessible",
      "name": "2.18 Patient WC Accessible",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -0.663329075330676,
        "pitch": 0.06051807658858266,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": 2.092805978194165,
          "pitch": 0.34858329508444186,
          "rotation": 0,
          "target": "17--c003-corridor-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "20-219-patient-wc-accessible",
      "name": "2.19 Patient WC Accessible",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -0.7988237730281718,
        "pitch": 0.2326289360387257,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": 2.252852941471663,
          "pitch": 0.24743450805296163,
          "rotation": 0,
          "target": "17--c003-corridor-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "21--c003-corridor-4",
      "name": " C0.03 Corridor 4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -0.47660914189077275,
        "pitch": 0.029780009497386573,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": 2.7089639565126102,
          "pitch": 0.1596804400726164,
          "rotation": 0,
          "target": "17--c003-corridor-3"
        },
        {
          "yaw": -2.6180948454505852,
          "pitch": 0.27793633627988434,
          "rotation": 0,
          "target": "22-220-speech-therapy-room"
        },
        {
          "yaw": -0.4921389501302915,
          "pitch": 0.1829183376852903,
          "rotation": 0,
          "target": "23--c003-corridor-5"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "22-220-speech-therapy-room",
      "name": "2.20 Speech Therapy Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -1.2324946725304216,
        "pitch": 0.14516045608817052,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": 2.172724125328643,
          "pitch": 0.15369538680497286,
          "rotation": 0,
          "target": "21--c003-corridor-4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "23--c003-corridor-5",
      "name": " C0.03 Corridor 5",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -0.41082324223065747,
        "pitch": 0.11910658700897514,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": 1.128653078022726,
          "pitch": 0.4128373903250626,
          "rotation": 0,
          "target": "24--c003-corridor-6"
        },
        {
          "yaw": 2.697207815387231,
          "pitch": 0.195531012566466,
          "rotation": 0,
          "target": "21--c003-corridor-4"
        },
        {
          "yaw": -0.3754698306153852,
          "pitch": -0.4401152623334106,
          "rotation": 0,
          "target": "30-1f-extension-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.211414648989356,
          "pitch": 0.2452596381171137,
          "title": "2.24\nTreatment\nRoom\n(Therapy)",
          "text": ""
        },
        {
          "yaw": -2.1844680432191126,
          "pitch": 0.16855801834943662,
          "title": "2.21\nGeneral Therapy\nRoom",
          "text": ""
        },
        {
          "yaw": -1.7208128703284586,
          "pitch": 0.15656852919457087,
          "title": "2.23\nTreatment\nRoom\n(Therapy)",
          "text": ""
        },
        {
          "yaw": -2.9146459062243597,
          "pitch": 0.23804975226958014,
          "title": "2.22 Wheelchair Bay",
          "text": ""
        }
      ]
    },
    {
      "id": "24--c003-corridor-6",
      "name": " C0.03 Corridor 6",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 0.6434997444731785,
        "pitch": 0.0995814021846968,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": 0.5984171784588703,
          "pitch": 0.20556493868252979,
          "rotation": 0,
          "target": "29-227-msk--paediatric-gym"
        },
        {
          "yaw": 1.996081530689132,
          "pitch": 0.22326818925241199,
          "rotation": 0,
          "target": "28-228-msk-treatment-room"
        },
        {
          "yaw": -0.3238562685679547,
          "pitch": 0.26924837624414977,
          "rotation": 0,
          "target": "27-226-msk-treatment-room"
        },
        {
          "yaw": -3.027516188826336,
          "pitch": 0.15087986621318805,
          "rotation": 0,
          "target": "26-229-msk--paediatric-store"
        },
        {
          "yaw": -2.14400827432244,
          "pitch": 0.19931144167348158,
          "rotation": 0,
          "target": "25-225-msk-treatment-room"
        },
        {
          "yaw": -2.5202459184071966,
          "pitch": 0.1777102542947837,
          "rotation": 0,
          "target": "23--c003-corridor-5"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "25-225-msk-treatment-room",
      "name": "2.25 MSK Treatment Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -0.4645260932231139,
        "pitch": 0.035361195229432596,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": 2.3725312546331327,
          "pitch": 0.14438547734698304,
          "rotation": 0,
          "target": "24--c003-corridor-6"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "26-229-msk--paediatric-store",
      "name": "2.29 MSK & Paediatric Store",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -0.4511004835923824,
        "pitch": 0.05583094464928884,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": 2.830355063563692,
          "pitch": 0.16530142584050367,
          "rotation": 0,
          "target": "24--c003-corridor-6"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "27-226-msk-treatment-room",
      "name": "2.26 MSK Treatment Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -0.2940208509128901,
        "pitch": 0.06141403911422216,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": 2.692998541776676,
          "pitch": 0.1458975256483619,
          "rotation": 0,
          "target": "24--c003-corridor-6"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "28-228-msk-treatment-room",
      "name": "2.28 MSK Treatment Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -0.2899931680236758,
        "pitch": 0.13584901512941272,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": 2.8236512075122278,
          "pitch": 0.14083944945945426,
          "rotation": 0,
          "target": "24--c003-corridor-6"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "29-227-msk--paediatric-gym",
      "name": "2.27 MSK & Paediatric Gym",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -0.7749342670069872,
        "pitch": 0.08917603267674679,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": 2.2730869312978186,
          "pitch": 0.1601915153748834,
          "rotation": 0,
          "target": "24--c003-corridor-6"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "30-1f-extension-1",
      "name": "1F Extension 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 0.5455637896333148,
        "pitch": 0.020394423687836394,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": 0.4449030626250732,
          "pitch": -0.492718964602199,
          "rotation": 0,
          "target": "33-2f-extension"
        },
        {
          "yaw": 0.45358352358940124,
          "pitch": 0.5763238260715795,
          "rotation": 3.141592653589793,
          "target": "23--c003-corridor-5"
        },
        {
          "yaw": 0.452437086796186,
          "pitch": 0.07772848992071779,
          "rotation": 0,
          "target": "31-1f-extension-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "31-1f-extension-2",
      "name": "1F Extension 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -2.3030112621288303,
        "pitch": 0.09498392924876953,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": -2.711603383585805,
          "pitch": 0.04237413850330185,
          "rotation": 0,
          "target": "30-1f-extension-1"
        },
        {
          "yaw": -1.7537667836258777,
          "pitch": 0.056564660290300495,
          "rotation": 0,
          "target": "32-1f-extension-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "32-1f-extension-3",
      "name": "1F Extension 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -0.37186940608615693,
        "pitch": 0.0018333346574941345,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": 2.518708095994035,
          "pitch": 0.10206909321405533,
          "rotation": 0,
          "target": "31-1f-extension-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "33-2f-extension",
      "name": "2F Extension",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -1.7663310824194856,
        "pitch": 0.04751547312151416,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": -1.7945199838940162,
          "pitch": 0.5500383650542489,
          "rotation": 3.141592653589793,
          "target": "30-1f-extension-1"
        },
        {
          "yaw": -1.7761545038282733,
          "pitch": 0.192447443318013,
          "rotation": 0,
          "target": "34-2f-north-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "34-2f-north-1",
      "name": "2F North 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 0.7935097190841649,
        "pitch": 0.06885816506746778,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": 0.7214124416576873,
          "pitch": 0.2654522370788186,
          "rotation": 0,
          "target": "35-2f-north-2"
        },
        {
          "yaw": -3.140001283286802,
          "pitch": 0.12161771080108608,
          "rotation": 0,
          "target": "33-2f-extension"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "35-2f-north-2",
      "name": "2F North 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -0.0187958534830166,
        "pitch": -0.0037220629766210322,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": -0.063154720991907,
          "pitch": 0.1394899585922893,
          "rotation": 0,
          "target": "36-2f-north-3"
        },
        {
          "yaw": 3.085658904235202,
          "pitch": 0.07255447753168909,
          "rotation": 0,
          "target": "35-2f-north-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "36-2f-north-3",
      "name": "2F North 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 1.8807072224317256,
        "pitch": 0.07207534807339044,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": -3.0320729617324815,
          "pitch": 0.21153684596516875,
          "rotation": 0,
          "target": "35-2f-north-2"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "NEECH Ground Floor 14/06/2022",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
