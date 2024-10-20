const channelData = {
    "T1": {
        "file": "https://ottb.live.cf.ww.aiv-cdn.net/lhr-nitro/live/clients/dash/enc/wf8usag51e/out/v1/bd3b0c314fff4bb1ab4693358f3cd2d3/cenc.mpd", 
        "drm": {
            "clearkey": {
                "keyId": "ae26845bd33038a9c0774a0981007294",
                "key": "63ac662dde310cfb4cc6f9b43b34196d" 
            }
        }
    },
    "T2": {
        "file": "https://ottb.live.cf.ww.aiv-cdn.net/lhr-nitro/live/clients/dash/enc/f0qvkrra8j/out/v1/f8fa17f087564f51aa4d5c700be43ec4/cenc.mpd",
        "drm": {
            "clearkey": {
                "keyId": "6d1708b185c6c4d7b37600520c7cc93c",
                "key": "1aace05f58d8edef9697fd52cb09f441"
            }
        }
    },
  "T3": {
        "file": "https://ottb.live.cf.ww.aiv-cdn.net/lhr-nitro/live/clients/dash/enc/lsdasbvglv/out/v1/bb548a3626cd4708afbb94a58d71dce9/cenc.mpd", 
        "drm": {
            "clearkey": {
                "keyId": "4e993aa8c1f295f8b94e8e9e6f6d0bfe",
                "key": "86a1ed6e96caab8eb1009fe530d2cf4f" 
            }
        }
    },
    "T4": {
        "file": "https://ottb.live.cf.ww.aiv-cdn.net/lhr-nitro/live/clients/dash/enc/i2pcjr4pe5/out/v1/912e9db56d75403b8a9ac0a719110f36/cenc.mpd",
        "drm": {
            "clearkey": {
                "keyId": "e31a5a81caff5d07ea2411a571fc2e59",
                "key": "96c5ef69479732ae734f962748c19729"
            }
        }
    },
  "T5": {
        "file": "https://ottb.live.cf.ww.aiv-cdn.net/lhr-nitro/live/clients/dash/enc/gesdwrdncn/out/v1/79e752f1eccd4e18b6a8904a0bc01f2d/cenc.mpd", 
        "drm": {
            "clearkey": {
                "keyId": "60c0d9b41475e01db4ffb91ed557fbcc",
                "key": "36ee40e58948ca15e3caba8d47b8f34b" 
            }
        }
    },
    "LALIGA": {
        "file": "https://ottb.live.cf.ww.aiv-cdn.net/dub-nitro/live/clients/dash/enc/fpndxmzw6o/out/v1/70a50b1bda944628b8e7e66ab4069419/cenc.mpd",
        "drm": {
            "clearkey": {
                "keyId": "fc12a94c41e0885dbea8a8d94f0a277d",
                "key": "fc045df077e7669666b1b230e9aa3901"
            }
        }
    },
    "Fancode": {
        "file": "https://a39aivottlinear-a.akamaihd.net/OTTB/sin-nitro/live/clients/dash/enc/l8j2xgwt32/out/v1/fe72171ab2684ab8b9ee3e2ffcc9cff2/cenc.mpd",
        "drm": {
            "clearkey": {
                "keyId": "159a2b4e1d2d7f16892d35d935a2fb34",
                "key": "07809840dd0f511221ca78459167d1b3"
            }
        }
    }
};

var allowedDomain = "finallystream.pages.dev";


var currentDomain = window.location.hostname;

if (currentDomain !== allowedDomain) {
  window.location.href = "https://telegram.me/FinallyLiveOwner"; 
}

