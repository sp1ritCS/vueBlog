(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{1959:function(t,e,i){t.exports=i.p+"img/sp1rit_scaled.c035a89a.svg"},"1cd6":function(t,e,i){},"210b":function(t,e,i){},b8fa:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"mx-auto"},[n("v-dialog",{attrs:{"max-width":"512"},model:{value:t.pgpKeysDiag,callback:function(e){t.pgpKeysDiag=e},expression:"pgpKeysDiag"}},[n("v-card",[n("v-card-title",{staticClass:"headline"},[t._v("PGP Key: "+t._s(t.base64Decode(t.pgpMailAddr)))]),n("v-card-text",[n("v-expansion-panels",[n("v-expansion-panel",[n("v-expansion-panel-header",[t._v("PGP ID")]),n("v-expansion-panel-content",[t._v(t._s(t.pgpMailId))])],1),n("v-expansion-panel",[n("v-expansion-panel-header",[t._v("PGP Fingerprint")]),n("v-expansion-panel-content",[t._v(t._s(t.pgpMailFinger))])],1)],1)],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{text:""},on:{click:function(e){t.pgpKeysDiag=!1}}},[t._v("Close")]),n("v-btn",{attrs:{color:"primary",outlined:""},on:{click:function(e){return t.downloadPubkey(t.pgpMailFinger,t.pgpMailPubkey)}}},[t._v("Download Pubkey")])],1)],1)],1),n("v-img",{attrs:{src:i("1959"),height:"300px",light:""}},[n("v-row",{staticClass:"fill-height"},[n("v-card-title",{staticClass:"imgBtns"},[n("v-btn",{attrs:{icon:""},on:{click:function(e){return t.goHome()}}},[n("v-icon",[t._v(t._s(t.icons.back))])],1),n("v-spacer"),[n("div",{staticClass:"text-center"},[n("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,s=e.attrs;return[n("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",s,!1),i),[n("v-icon",[t._v(t._s(t.icons.menu))])],1)]}}])},[n("v-list",[n("v-list-item",[n("v-list-item-title",[t._v("Download as VCard")])],1)],1)],1)],1)]],2),n("v-card-title",{staticClass:"pl-12 pt-12 titleflex"},[n("v-btn",{attrs:{text:""}},[n("v-icon",[t._v(t._s(t.icons.account))]),n("span",{staticClass:"sname"},[t._v('Florian "sp1rit"')])],1)],1)],1)],1),n("v-list-item",[n("v-list-item-icon",[n("v-icon",{attrs:{color:"primary"}},[t._v(t._s(t.icons.socialBio))])],1),n("v-list-item-content",[n("v-list-item-title",[t._v(" Developer (Rust / ECMA / Linux), Security & Privacy contiuos. "),n("br"),n("br"),t._v("#freeculture, #foss ")]),n("v-list-item-subtitle",[t._v("Biography")])],1)],1),n("v-divider",{attrs:{inset:""}}),n("v-list",{attrs:{"two-line":""}},[n("v-list-item",{on:{click:function(e){return t.openURI("https://sp1ritCS.github.io/me")}}},[n("v-list-item-icon",[n("v-icon",{attrs:{color:"primary"}},[t._v(t._s(t.icons.socialWebsite))])],1),n("v-list-item-content",[n("v-list-item-title",[t._v("https://sp1ritCS.github.io/me")]),n("v-list-item-subtitle",[t._v("Website / Blog")])],1)],1),n("v-divider",{attrs:{inset:""}}),n("v-list-item",{on:{click:function(e){return t.openURI("https://social.privacytools.io/@sp1rit")}}},[n("v-list-item-icon",[n("v-icon",{attrs:{color:"primary"}},[t._v(t._s(t.icons.socialMastodon))])],1),n("v-list-item-content",[n("v-list-item-title",[t._v("@sp1rit@social.privacytools.io")]),n("v-list-item-subtitle",[t._v("Mastodon")])],1)],1),n("v-divider",{attrs:{inset:""}}),n("v-list-item",{on:{click:function(e){return t.openURI("https://matrix.to/#/@florian:librem.one")}}},[n("v-list-item-icon",[n("v-icon",{attrs:{color:"primary"}},[t._v(t._s(t.icons.socialMatrix))])],1),n("v-list-item-content",[n("v-list-item-title",[t._v("@florian:librem.one")]),n("v-list-item-subtitle",[t._v("Matrix")])],1)],1),n("v-list-item",{on:{click:function(e){return t.openURI("https://matrix.to/#/@spiritcs:matrix.org")}}},[n("v-list-item-action"),n("v-list-item-content",[n("v-list-item-title",[t._v("@spiritcs:matrix.org")]),n("v-list-item-subtitle",[t._v("Matrix - Fallback")])],1)],1),n("v-divider",{attrs:{inset:""}}),n("v-list-item",{on:{click:function(e){return t.openURI("https://github.com/sp1ritCS")}}},[n("v-list-item-icon",[n("v-icon",{attrs:{color:"primary"}},[t._v(t._s(t.icons.socialGit))])],1),n("v-list-item-content",[n("v-list-item-title",[t._v("sp1ritCS")]),n("v-list-item-subtitle",[t._v("GitHub")])],1),n("v-list-item-icon",[n("v-icon",[t._v(t._s(t.icons.socialGitGithub))])],1)],1),n("v-list-item",{on:{click:function(e){return t.openURI("https://gitlab.com/SpiritCS")}}},[n("v-list-item-action"),n("v-list-item-content",[n("v-list-item-title",[t._v("SpiritCS")]),n("v-list-item-subtitle",[t._v("GitLab")])],1),n("v-list-item-icon",[n("v-icon",[t._v(t._s(t.icons.socialGitGitlab))])],1)],1),n("v-divider",{attrs:{inset:""}}),n("v-list-item",{on:{click:function(e){return t.openKeyDiag(0)}}},[n("v-list-item-icon",[n("v-icon",{attrs:{color:"primary"}},[t._v(t._s(t.icons.mail))])],1),n("v-list-item-content",[n("v-list-item-title",[t._v("c3Axcml0QGRpc3Jvb3Qub3JnCg==")]),n("v-list-item-subtitle",[t._v(" Personal (only send encrypted), encoded in base64 ")])],1)],1),n("v-list-item",{on:{click:function(e){return t.openKeyDiag(1)}}},[n("v-list-item-action"),n("v-list-item-content",[n("v-list-item-title",[t._v("sp1ritCS@protonmail.com")]),n("v-list-item-subtitle",[t._v("Public, please mail me here.")])],1)],1),n("v-divider",{attrs:{inset:""}}),n("v-list-item",[n("v-list-item-icon",[n("v-icon",{attrs:{color:"primary"}},[t._v(t._s(t.icons.globe))])],1),n("v-list-item-content",[n("v-list-item-title",[t._v("🇩🇪 German, 🇺🇸 English")]),n("v-list-item-subtitle",[t._v("Spoken Languages")])],1)],1)],1)],1)},s=[],a=i("2b0e"),o=i("94ed"),l=a["default"].extend({name:"Contact",data:function(){return{pgpKeysDiag:!1,pgpMailAddr:"",pgpMailId:"",pgpMailFinger:"",pgpMailPubkey:"",mails:[{addr:"c3Axcml0QGRpc3Jvb3Qub3JnCg==",id:"0x73166D09",fingerprint:"D248BF2F4C6A82A1E0569D897D8C1CD573166D09",pubkey:atob("LS0tLS1CRUdJTiBQR1AgUFVCTElDIEtFWSBCTE9DSy0tLS0tCgptUUlOQkY5QzJwZ0JFQURWSUJVZ2crLzdkUTRvUXU5WHk0RXdKdHphdXYyQk84blBLbktZcXhhV1VtTThETVhPCnQrU3p1WjVpbjd5L285RXFiazlCbmFPdnlEam5IUS9GL25vRVZkWmNHdXZrN2szcDJNM3FobGNwNUhzOFp3dG8KellLMmV0WTFUbnp1aGo4VDJaRFQvK3VjbkM4SWZQUU5HVTJHWC9FVXoyZFlNViswSytiKy9ybytYMGVzanE1VQplK0VRaGFISGtoU2p0VkdBYkZDQXZPNVhka0p1aDlUZmxDMXVEVFU1dXl5ODZuN1JjMEQ1dW5kVUM3endrc1E1Cnd3bDNzNE9zdlNPazZsWnkrTGlDQWZMTEVYS3d1S0Myb0dFeDM2UU1lSEcyOVhLYTRPakJoSjVpa0ZZTWhwemMKMGxudGk1RlVudkpHYWNrVzE2TU5YZXY2MUxZVXhnUXpTSStMdlVxNDhJSnVmb2I0VEdBZEx0Z2ZpS05ad21qRQo1d0luak5iRXY4VXF2eE83ckRYSUhFb0c0SmZYZk94Rlc2eGhQUHRTYVVMb1hBNnpmNnRjOUQyZzk4ajhJbHd6CkxaeEFNdmgzYUpjQkYyb2doR2wwalBUR2FEUDBIZGhHNjNheGh0ZGJJektHRFJ5UE1JclJjYVBqazRPUU5DNmoKY2htRWkyd2IyL1VNUTllYmJXSlJKamh3RTR5YkRGTURSY1JQVGd4bkpQVU84cEtnOEpnaUQzM0E0SkZiRms0agpCSTFkQjNHNUdtK0RlTFI1bVB6emNCYkgxc2ZqRDVsRmlWbW9FVE8yODd1MTBMMFdTdHVhaSt3NjFXb2o3dGJFClBCd0s0L2xwZVZIYUFucDFqQUk1a0NLQWRQTkVMWktHaFdiY2NsNERMdzBHWkZ3MmxzSW1qbHN2K1FBUkFRQUIKdENWR2JHOXlhV0Z1SUNKemNERnlhWFFpSUR4emNERnlhWFJBWkdsemNtOXZkQzV2Y21jK2lRSk9CQk1CQ0FBNApGaUVFMGtpL0wweHFncUhnVnAySmZZd2MxWE1XYlFrRkFsOUMycGdDR3dNRkN3a0lCd0lHRlFvSkNBc0NCQllDCkF3RUNIZ0VDRjRBQUNna1FmWXdjMVhNV2JRbHAreEFBaU95RUtsS2xJSGpraHZ5dUNPM3JjMmhjMnJ2bG8reTIKK2pXRi9Pak1WeXB0ay81TVg2SnkvYUtCajFUZTB2NmorSGt4MnZGbHVnK2cySnArTmR2RE5VZWhQOUZobkc1aQpYUU9COW5HL0FSWWxjZGJXMkdxUUwybHhXMlkwVlJFMDdXUWVRbzhtbDBxRGZuNlZ5YWtrOXFkM0YzNE9RbFAxCjYxQzhaVGtuRkNnSk1QMEw4M2llNUNNTkt4YlJoZGV6WmpMTTZuVVpFL1ByY2hBSXpRRlYwLzFXVkhRTE1VUEsKUW1JbnpRaEtUY1lvWEwycDRtdlEyUmhIeG5WT2hSMHF0K1J0dEFFUmVFeCtoMFJmdWFBWlg3WFpGbnpjQ2hybQp1SGNuY0JnTXg2ZWlDZ2hpMm5EMStPTDBvTkFybnd6YjZKRTBRVE9aa2l0VXJhb1JicUlsNUhlTVE2K0s5TzBJCmN0NnY1eUFDM1BSVmVIZ25UL21tU3JXN0NqZUdKQVdEZ05TVXR4Yk9KNUcvMi9Odjg1RjFXMGg5VXhCTlBFTTUKY0lXUCs0UDRVTFk1cmpHTjFNS3RwbjliNVUxUTVRVk9MRC9rWlNrMGFuOEE0V1k5VUdmOU03Z0FzUmdMVlJGYgowdzQwUWZwVUJzNmYxY0NWcDBZK28vblBlNG0xWXlBdThsQm50YUxoR1kvWERtMnpWTXFNTVg1OWZjRngzODJECklsZVhubDNUTGNKNWptWml5cWJ2ZHhIMnlVODFPTUNiVGJzQzdUbnByQ1VJbFZ0cWVURUtjU3F3bTh3UnprdisKb0VmUE5hakg3NVFnMi81RXg0ZHk2Z2ZzTFZ4cUY4MTBNeDBZVEprb1ZaRzlJNWgyTXBpZDJ4L05JeEpvVmZDKworNWlYL3ZnWGltVzVBZzBFWDBMYW1BRVFBTW8yQkM0a2F4Tk9tcEE4bld4QThncDY1QjFuQUY2MkNXTU8vdERNCnBWRWJETjJuMUV6K0s4QlNFU0l4Y0xGVUNVZERVdUVYQWZqUmF5K25XdkMwWUxOVUFkWVErYTF1VmFYV3h6ajQKMitIc3dpU3hEaXowWXo5L0xJMHNscThQclR5VmdDQjBHS2NTdCswZ2t5dHhicEFMY3lsVWU1Rmp0SDdqVG1sSApyV0daWFVIRjJGdkpvaDJJWE5iN1ZidHFjVHBWYTl6OUU3SGs3MXBZTXZhdUxMZmVFTDhxMkMwSmxqYlhJQ1NTCmRVaDM5STNkUG01RnBSUk5qWVN4RWJuYjluUXRUUWRYYm9oVDM1VDNNaWZBM1JJSGpLaHNIOXdIWHM4ZlNmMUgKQVEvUzViQlBQcHpvbHpjay9NUmt0a2tOTUtaMEpmN2dzNjJlY1RSNjgxNUx3anRKQlk3UmdQbXc4S0NOalNMRgpSSjFwWUxWR2FyYUkrV1dvVHNjS1pmOGdLYmd0WloxamdUbFhUemhUVTBsRkJUV00rSmZYeUJ1RktXbHZBUlVuCjBaRkh2bFpKU2h0UXN5WVRRSnRSSE5ESHc2RUtyRGFWcXF2OGFvMmwzMmp4NDhobFpjam16ZlRCaS9EeE96M0oKOXFRY3RsSjJmYW5pNnBWZHRWdGRGWEtQTWJnNXQzTDMxd2k5eU51c016V3JldElZbWo5V3EvWmZxQjhxeFZsQQpHSkdGY3VkbWVlTWtYZHdKM0U5TE5JQnZya0hKd2tnN1BTUjAxWitFUzZFTmp3Tk84YWNpWWxKdWFFWGh3eEhOCkNvYVl1M1NhQ2xMU29GcGRuSWJWSzRLTStXZTJQeVM4S0RscmowUHRja3I2M05aQlNsL3VXL0tZYTdhSkthUFUKMkRDRkFCRUJBQUdKQWpZRUdBRUlBQ0FXSVFUU1NMOHZUR3FDb2VCV25ZbDlqQnpWY3hadENRVUNYMExhbUFJYgpEQUFLQ1JCOWpCelZjeFp0Q1NuVkQvOVZCWkRPbjU0a1crZjRYRmJscVdjZGNnejBIbFN2eHkvRnhjVEhscEI2ClRjdkVBdGIyM0I5U1Jwdmg0N2Ixc2t5WU9XdTFuVThyU1BMelZlY3JnTVBQQmJRbllVcUdJaGRFVXFldWR3NVUKem82dFpmZmRHb2tsaGxPbGpZdjkzWDZjeU81TUY4VnJPTUtZL2VhRjRZL3kxbnBsWEd4aTRQdjBONEZMREVSawo0TTBncjFnRmNuRVFLSWVnYUdNNkJpWUlQRXhVNlplVm9SQkd4S3IxL3NLWjN3SGliRUJBZWR0aTVZR08xOVpnCnk4QXd3cEdhUEVUYnFQM0xrMWdTSVRORTliT1BOWkdITkduaWQrVFlIMStwaElESE5jQVZTY0ZnanIrNUdCa3kKTkx2ZkhwT0xCaU94T09pbGlPRUpCdUIvZzljY1hJWU1WREZta1psck9JV3ozYzg2M242aTRCV0JOaFJKMlB1dgpNSGtmRGtTY2tHNzlOdDZBeks1WkxhQUVScWl1MnF6RmlZRlhCVE5oUFRORnNiRlhZem0rWjZ3ZVpzcVlzNHlpCk42ck9zWHFJS21Cd1l5ZVJHa1FTVEV3V003OXR0MkZ5Z29Vcjlia1dtRklnNTFpWURkQk1RRUhLZ0VIc1VacU0KUEpVQmhIMHdiQ3U0QS82NzhzWGc3NUVESEt4SFdZS2xidTZtSWhEV3J3bGJ0V0syZFdocUt0bHJYSExCREltSQpjVDZRZ09wZ0JHMGxnaUFvc2dJQ2dsbzZ3d3k1aUo2NzRpZmlvOWk4NVBISU4wWTJDbk1rUFlSZ2o3b2xteE1XCjZTMGtRcVRCS21MQUY2b2kxQ2dUZ1hwQWZFVFFJNWhFWjdQQVovZTNXUVBhSmNzZ0Nvb1NQODJ2Q1FUYmg1T1MKZ0E9PQo9b3ZiRgotLS0tLUVORCBQR1AgUFVCTElDIEtFWSBCTE9DSy0tLS0tCg==")},{addr:"c3Axcml0Q1NAcHJvdG9ubWFpbC5jb20K",id:"0xAC81FB05",fingerprint:"05EF520E8E512D5C47C7FC78BA579378AC81FB05",pubkey:atob("LS0tLS1CRUdJTiBQR1AgUFVCTElDIEtFWSBCTE9DSy0tLS0tCgptUUdOQkYxVEVSVUJEQURZS1hYcW9hbWlGTlBORkEvQlRZSEJuc1Vnc1hTQXV2TUpvYXluZENiUHluazczZ1JoCk45ZTE1THVhNS9mRzZQZk5ldVRBSERvTmxYV2Q0QTNnaFpaVFg1TUhsWDc4am1yc1RPNlkwWlpIRnRzQnRIaVQKSDRuRWt1b1VlTEZBTU1SZ3FWN08xUDNlOGFUVjNyeURJV3NUR1lXU0tUZU4rVzc4UlNDeWFwU2hPRHNTQ0hQRApZRm1YL014YSsxR1p5WkJRYUo4NEZpRkl6YXJUaERlTzdheDZWVy9tS0ZsOVdzSU1reDAvME9ZYXphZ0hIZVJOCjkxOGJ2TjRhUlRkdjhyS200K0RTV3pUby9tYStTQm9JN0tVL3JNcHJCZUlnL1pTcXFHR3FBdUNJS01kemZVRWEKbHFTcGdmZWpxSjU3WjVUY0lwdjJMK2IrcTllcTRmalFmRXY2cFlWQ2JsblhoTVhDNVcydlh1WFFUeVd4b1JvZwpHV1Q2NXVxK24yczdGR2Q4WHp3T3JJajg2ZGQ0OExYSHZuOVN5cnkzSFVrZmc2REU4cUhNUldrOTQycndNb2tHCm5XLzFrdW1yRmlyeEsxc3M3WS9scTVydUxPYndsN3dWRWU2NE92OUpRYWFTTW5nOGpSSkViS0RzNFVvS2U1OXoKczhYRFZTTDlrT25TWGdFQUVRRUFBYlFjVTNCcGNtbDBRMU1nUEhOd2NtbDBZM05BWjIxaGFXd3VZMjl0UG9rQgpzQVFUQVFvQUdnUUxDUWdIQWhVS0FoWUJBaGtBQllKZDhVcFpBcDRCQXBzREFBb0pFTHBYazNpc2dmc0ZsZkVNCkFNUHcxbFgrSXptbkpYMWVnYVY4Rmx4NE5EQSswV3d5dGtlU2lpbitBdktXOXFFaEE3ZUJEVnp1RTBkK2o5aWcKQ1Z1QXNCcGZCdGl6QWJ3VXhNRHcwNCtHL3NOMmcwQUExbFBVOG0xam9TWm1hYTlmblZTaWFGNDBoWXpZR3dkdgpzRENqRDdkcjVjOTUzQktGRXhDMC9ZTDVKdmhTLzI2VmdNNXFoTlNjT0NuVUllQW9xakI2Tmw4UCs0ZEU4SDREClRIazVRTzJ2cXZrZHQzWEppL2xZQU9QUnZ3V2hpbVEyd1JNdjBzdVVOMmpPRzlOWC9xNzJOSlpTelRGZ1JGZG4KTHBTdWNVUWZWZGJoTm1WWFl5WDN1aXNLU0daTVR1S2x6dkhtUTZoUW5YNm1DWkdnaWpPSW8weGpJS3FwQmVZbgptV3RORi9WZzFjUzZ6c1lRbjNqSmhrdkxEYXlpS2dlMmdtS0IyMzBzY1FsM2N2bWtKeTV6VjBQa2xIcXFjMmcyCjlPbjdoRnBtMURQNXNBUnVEVW94ZkVEOU9pK05DbkJiNW5CNFllT2FVOHErSXZzVmJOOGRXN2lRdXZMTWhiUVIKaktBOW0rNWhtWVE4dVVHK1huQ0JrZDBISC9XRXBWRTArOEw3TU1QejhpQ3J1UzhTVGd6d0tRUTI3V1REbm1rNAoyTFFpYzNBeGNtbDBRMU1nUEhOd01YSnBkRU5UUUhCeWIzUnZibTFoYVd3dVkyOXRQb2tCc0FRVEFRb0FHZ1FMCkNRZ0hBaFVLQWhZQkFoa0JCWUpkOFVwWkFwNEJBcHNEQUFvSkVMcFhrM2lzZ2ZzRitwWU1BTXRPWEUxMXJjY1QKUCtKTFZ0RXNRd25FcWFEUWFvc2hJckRWZys5RWt3U0xoRUlScEsrV2dsUnZ3eFB0WllWS1dWMC9TRjkrOFQzQQpvK2dpYmQrNjdjdWJGbiszOVd2S1ZuZWFiQUJZK2R0MlIyMDNaTm4ySHpIQXNEZFp6WWlsWHJmc3Nxb3NOZ29MClVBajB3ZDRUWitxSkRXVW1CUDNvNUFGamNjaGpHTkYrRnlwZ3U3QUVVSTA2ZGFnMGJ4ZmpsNGFFTzA1MVNISFUKbm5pbUJnanR1L3BPZ1pHQVVFUmp0NHFyaDZ2a0N1RTJUSTQzZW5OUUU0ZExUdGY1RDVuQ0RGTkl4bTBISEduVwpDOUoxckRQUkpMajBHaFBWbFRheDBvMHpMbXk4UzN6SE5uRlRhVTVqam1WZDNFcEdlZTJvRGdYYzY1V2RtcEFCCmxWTUI4ZXU3VWtDNmRBR1RsVFZzV0tpQ2duQ2FyNVB0aG5LRVFtemxrVm9TN2MxZjhndWxWcjhwQS9lU1U1Mi8KOW1kbWZ6dUxpbm5BcUhUYnc2TGZpKzlnQTM4czUxQmdOcTQ3TkFKZ2xuVGpHUHNKZVBqa3RXcm0yRkJwV1pKMwplbFU5dEd1YW1HdzQrVURQM0NlYldudm1sdWtpRXBKTFVPdjN3SXhBdEVvcFIzSHNiMFkxWkxrQmpRUmRVeEVWCkFRd0FvaWxpUG42VW1WN2pYbzZ1NjdXOE5IUFpwa0wvSDJyMzMrOGFBNmlFQ1U3V3V5UDhTWmZjUTlzY1p2T0sKMU9lbExFMFZ1RHRwNVU0cGN2SzRoSCtEM2dZNlNwZi9tVnlKVEFMT0R5cjJQMFRFclhxcG9WMmZHVW4wSkc5UQpTNmdBdXZiS2lJRElsQlozeTR5TXlEZ0lITXRrQkt1QnBNTFJ0N2RqL0svNDFRV0p3dEVoeGorWEJyeE8zcis2Cnd3WGlMUDh1MlNrN2hreGs2ZXFhMnpBR0s5Zzd3RTJPcHlLeDlFOTE1dUY1WEN2QW5SOGptclRGUEFDYys1SE8KdnFTSDJZOU5jMERIdHhzS2J0QzJpaW1oSDBPTnBGNi9UUTYyd3JxOHlCdDkzQjhKWDAyVkZDVy8ybnVkQ253bQpTR0RzS0FTdUR1eGZXdUk5QUkrTjlvQ2FuaGNyMUp0SVdESzE0OVFlcWlzN3hQT09IMmRUd3BxRnpNYnVtSkpZCjMxT1J4NlhHUXY5M2syMVpFaE9vaTZOVnNKT3VuUXY0SHErNmFSdDZwVzhhMlVXcFdkNU1rL292WGRuWEw1d2cKSTZ2UDBZWEJUN0JLNXQ2QW9wVm9lNHg5YXc2ckYvM2RaZUNmUEF3TitRemZ3dVR4WWRxTDNwSjEzaTcvVVlzegpGVUdIQUJFQkFBR0pBWjhFR0FFS0FBa0ZnbDFURVJVQ213d0FDZ2tRdWxlVGVLeUIrd1czNHd2OUdacjIwSnkrCnpFMXY3RTJUeGlQejdCb3B3dElaaUNKdVVrM01oQ2tKWnpqcTZ3ZmlidStFL3RCSnRISEc2YmFYVnMwOEphRnkKNGU4UUhxSGxORCtDcG8wcnpUaHJiU2t6bEFjbEc2aWg3QnM3bWF2LytMcmRQd2Y1dDNqWVpNRWkxdlJCK2dtVQprRUExNU9zVCsrRnFmdnFNRi80S29YNUx4MjNSMmZ2Yzd5cDRhM2tIWDdXNHRFRkNobzBnQ0R3a1FSRnh4czZYCmd0cWpIc1IwUVU0Q1Q4b1dCY3hyNlVNUnpoYUZqSlp3MVRNK1VZRlhNSG1iOXBXWjBkdHdwTlhaZFZFM3Jrei8KUDM4cXRMdWlIVElaYVFwOHdobnJzc21XdE1WSmFtUHBUS3ZCd1dzNE92SDFYMDM5ZGNuWDVOMjRrQ2tXdytrcwplSlYzRUxtdnNnWUNmMlJHeVVick9BQzczWmcybXZkd3lYSFlITzd4ZGx6VkhNUmhtTzFoT3RQRUE2bTJzWlJyCnczdGt3WElzV1lJR2lQMDRxSFRpWS9SSFluaGlUZTVvZjFKRGlKZU1MNzd0YUk4Nkp5VGhZN29PWFRkcENuZWUKYmlSNUlIbzdtTFJwRmpMclhyN1JSdkdFZjBXOXRxdExtU2QwUUJJbit2YlVrN3FOa3JhdUxGeXIKPVBaL2kKLS0tLS1FTkQgUEdQIFBVQkxJQyBLRVkgQkxPQ0stLS0tLQo=")}],icons:{back:o["c"],menu:o["h"],account:o["a"],socialBio:o["p"],socialWebsite:o["r"],socialMastodon:o["o"],socialMatrix:"M 1.2293314,2.9999999e-8 V 24 H 3.5099889 V 23.450538 H 1.8618809 V 0.54932299 h 1.648108 V 2.9999999e-8 Z m 19.2605416,0 V 0.54932299 H 22.13812 V 23.450538 H 20.489873 V 24 h 2.280796 V 2.9999999e-8 Z M 10.860785,7.5776509 c -0.562792,0 -1.0624743,0.1216628 -1.4983565,0.3640809 C 8.9262617,8.1845782 8.5539706,8.5271299 8.2448553,8.968286 H 8.2118722 V 7.8093766 H 5.9934254 v 8.5592514 h 2.350802 v -4.966731 c 0,-0.419351 0.060685,-0.758545 0.1821796,-1.018064 C 8.6478299,10.124669 8.7937829,9.9259837 8.9650861,9.7878857 9.1360327,9.6501458 9.3127907,9.5561412 9.4949249,9.5064746 c 0.1819204,-0.049808 0.3281586,-0.074602 0.438679,-0.074602 0.3752421,0 0.6594051,0.063766 0.8525841,0.1902529 0.193108,0.1271233 0.331105,0.2955683 0.413906,0.5050645 0.08294,0.209854 0.129726,0.43891 0.140985,0.687385 0.01062,0.248189 0.01642,0.499394 0.01642,0.753213 v 4.800975 H 13.7083 v -4.767846 c 0,-0.264865 0.0192,-0.527104 0.05804,-0.786338 0.03854,-0.259521 0.115861,-0.491159 0.231725,-0.695596 0.115794,-0.2039387 0.275648,-0.3697302 0.480015,-0.4968535 0.204224,-0.126482 0.471976,-0.1902529 0.803039,-0.1902529 0.331062,0 0.593297,0.055534 0.786476,0.1654792 0.192894,0.1104491 0.339275,0.2595514 0.43868,0.4470292 0.09934,0.187906 0.159876,0.408518 0.182179,0.662195 0.02216,0.254032 0.03313,0.524437 0.03313,0.811249 v 4.850799 h 2.35108 V 10.64061 c 0,-0.552031 -0.07745,-1.0236233 -0.231865,-1.4158256 C 18.685949,8.8332959 18.470716,8.5159562 18.19502,8.2729682 17.91904,8.0301937 17.587942,7.853647 17.201869,7.7432689 c -0.386643,-0.1103776 -0.805862,-0.165618 -1.25842,-0.165618 -0.59614,0 -1.112158,0.1436567 -1.54804,0.4304679 C 13.959241,8.2950728 13.61446,8.6262386 13.360783,9.0014094 13.128983,8.4715385 12.78951,8.1020391 12.342441,7.8921858 11.895514,7.6826886 11.401489,7.5776509 10.860785,7.5776509 Z",socialGit:o["l"],socialGitGithub:o["m"],socialGitGitlab:o["n"],mail:o["j"],globe:o["i"]}}},methods:{openURI:function(t){var e=window.open(t,"_blank");null===e||void 0===e||e.focus()},openKeyDiag:function(t){var e=this.mails[t];this.pgpMailAddr=e.addr,this.pgpMailId=e.id,this.pgpMailFinger=e.fingerprint,this.pgpMailPubkey=e.pubkey,this.pgpKeysDiag=!0},downloadPubkey:function(t,e){var i=document.createElement("a");i.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(e)),i.setAttribute("download","".concat(t,".pub.asc")),i.style.display="none",document.body.appendChild(i),i.click(),document.body.removeChild(i),this.pgpKeysDiag=!1},base64Decode:function(t){return atob(t)},goHome:function(){this.$router.push("/")}}}),c=l,r=(i("fc41"),i("2877")),d=i("6544"),h=i.n(d),u=i("8336"),p=i("b0af"),v=i("99d9"),m=i("169a"),f=i("ce7e"),V=i("5530"),U=i("4e82"),R=i("3206"),b=i("80d2"),F=i("58df"),g=Object(F["a"])(Object(U["a"])("expansionPanels","v-expansion-panel","v-expansion-panels"),Object(R["b"])("expansionPanel",!0)).extend({name:"v-expansion-panel",props:{disabled:Boolean,readonly:Boolean},data:function(){return{content:null,header:null,nextIsActive:!1}},computed:{classes:function(){return Object(V["a"])({"v-expansion-panel--active":this.isActive,"v-expansion-panel--next-active":this.nextIsActive,"v-expansion-panel--disabled":this.isDisabled},this.groupClasses)},isDisabled:function(){return this.expansionPanels.disabled||this.disabled},isReadonly:function(){return this.expansionPanels.readonly||this.readonly}},methods:{registerContent:function(t){this.content=t},unregisterContent:function(){this.content=null},registerHeader:function(t){this.header=t,t.$on("click",this.onClick)},unregisterHeader:function(){this.header=null},onClick:function(t){t.detail&&this.header.$el.blur(),this.$emit("click",t),this.isReadonly||this.isDisabled||this.toggle()},toggle:function(){var t=this;this.content&&(this.content.isBooted=!0),this.$nextTick((function(){return t.$emit("change")}))}},render:function(t){return t("div",{staticClass:"v-expansion-panel",class:this.classes,attrs:{"aria-expanded":String(this.isActive)}},Object(b["l"])(this))}}),T=i("0789"),W=i("9d65"),N=i("a9ad"),x=Object(F["a"])(W["a"],N["a"],Object(R["a"])("expansionPanel","v-expansion-panel-content","v-expansion-panel")),k=x.extend().extend({name:"v-expansion-panel-content",computed:{isActive:function(){return this.expansionPanel.isActive}},created:function(){this.expansionPanel.registerContent(this)},beforeDestroy:function(){this.expansionPanel.unregisterContent()},render:function(t){var e=this;return t(T["a"],this.showLazyContent((function(){return[t("div",e.setBackgroundColor(e.color,{staticClass:"v-expansion-panel-content",directives:[{name:"show",value:e.isActive}]}),[t("div",{class:"v-expansion-panel-content__wrap"},Object(b["l"])(e))])]})))}}),Z=i("9d26"),S=i("5607"),M=Object(F["a"])(N["a"],Object(R["a"])("expansionPanel","v-expansion-panel-header","v-expansion-panel")),E=M.extend().extend({name:"v-expansion-panel-header",directives:{ripple:S["a"]},props:{disableIconRotate:Boolean,expandIcon:{type:String,default:"$expand"},hideActions:Boolean,ripple:{type:[Boolean,Object],default:!1}},data:function(){return{hasMousedown:!1}},computed:{classes:function(){return{"v-expansion-panel-header--active":this.isActive,"v-expansion-panel-header--mousedown":this.hasMousedown}},isActive:function(){return this.expansionPanel.isActive},isDisabled:function(){return this.expansionPanel.isDisabled},isReadonly:function(){return this.expansionPanel.isReadonly}},created:function(){this.expansionPanel.registerHeader(this)},beforeDestroy:function(){this.expansionPanel.unregisterHeader()},methods:{onClick:function(t){this.$emit("click",t)},genIcon:function(){var t=Object(b["l"])(this,"actions")||[this.$createElement(Z["a"],this.expandIcon)];return this.$createElement(T["c"],[this.$createElement("div",{staticClass:"v-expansion-panel-header__icon",class:{"v-expansion-panel-header__icon--disable-rotate":this.disableIconRotate},directives:[{name:"show",value:!this.isDisabled}]},t)])}},render:function(t){var e=this;return t("button",this.setBackgroundColor(this.color,{staticClass:"v-expansion-panel-header",class:this.classes,attrs:{tabindex:this.isDisabled?-1:null,type:"button"},directives:[{name:"ripple",value:this.ripple}],on:Object(V["a"])(Object(V["a"])({},this.$listeners),{},{click:this.onClick,mousedown:function(){return e.hasMousedown=!0},mouseup:function(){return e.hasMousedown=!1}})}),[Object(b["l"])(this,"default",{open:this.isActive},!0),this.hideActions||this.genIcon()])}}),C=(i("0481"),i("4069"),i("210b"),i("604c")),Q=i("d9bd"),y=C["a"].extend({name:"v-expansion-panels",provide:function(){return{expansionPanels:this}},props:{accordion:Boolean,disabled:Boolean,flat:Boolean,hover:Boolean,focusable:Boolean,inset:Boolean,popout:Boolean,readonly:Boolean,tile:Boolean},computed:{classes:function(){return Object(V["a"])(Object(V["a"])({},C["a"].options.computed.classes.call(this)),{},{"v-expansion-panels":!0,"v-expansion-panels--accordion":this.accordion,"v-expansion-panels--flat":this.flat,"v-expansion-panels--hover":this.hover,"v-expansion-panels--focusable":this.focusable,"v-expansion-panels--inset":this.inset,"v-expansion-panels--popout":this.popout,"v-expansion-panels--tile":this.tile})}},created:function(){this.$attrs.hasOwnProperty("expand")&&Object(Q["a"])("expand","multiple",this),Array.isArray(this.value)&&this.value.length>0&&"boolean"===typeof this.value[0]&&Object(Q["a"])(':value="[true, false, true]"',':value="[0, 2]"',this)},methods:{updateItem:function(t,e){var i=this.getValue(t,e),n=this.getValue(t,e+1);t.isActive=this.toggleMethod(i),t.nextIsActive=this.toggleMethod(n)}}}),B=i("132d"),O=i("adda"),j=i("8860"),J=i("da13"),w=i("1800"),Y=i("5d23"),D=i("34c3"),G=(i("99af"),i("7db0"),i("a630"),i("caad"),i("c975"),i("a9e3"),i("2532"),i("3ca3"),i("498a"),i("ade3")),X=i("2909"),z=(i("ee6f"),i("480e")),H=i("4ad4"),I=i("16b7"),A=i("b848"),L=i("75eb"),K=(i("d3b7"),i("fe6c")),_=i("21be"),P=Object(F["a"])(_["a"],K["a"],H["a"]),$=P.extend().extend({name:"menuable",props:{allowOverflow:Boolean,light:Boolean,dark:Boolean,maxWidth:{type:[Number,String],default:"auto"},minWidth:[Number,String],nudgeBottom:{type:[Number,String],default:0},nudgeLeft:{type:[Number,String],default:0},nudgeRight:{type:[Number,String],default:0},nudgeTop:{type:[Number,String],default:0},nudgeWidth:{type:[Number,String],default:0},offsetOverflow:Boolean,openOnClick:Boolean,positionX:{type:Number,default:null},positionY:{type:Number,default:null},zIndex:{type:[Number,String],default:null}},data:function(){return{absoluteX:0,absoluteY:0,activatedBy:null,activatorFixed:!1,dimensions:{activator:{top:0,left:0,bottom:0,right:0,width:0,height:0,offsetTop:0,scrollHeight:0,offsetLeft:0},content:{top:0,left:0,bottom:0,right:0,width:0,height:0,offsetTop:0,scrollHeight:0}},hasJustFocused:!1,hasWindow:!1,inputActivator:!1,isContentActive:!1,pageWidth:0,pageYOffset:0,stackClass:"v-menu__content--active",stackMinZIndex:6}},computed:{computedLeft:function(){var t=this.dimensions.activator,e=this.dimensions.content,i=(!1!==this.attach?t.offsetLeft:t.left)||0,n=Math.max(t.width,e.width),s=0;if(s+=this.left?i-(n-t.width):i,this.offsetX){var a=isNaN(Number(this.maxWidth))?t.width:Math.min(t.width,Number(this.maxWidth));s+=this.left?-a:t.width}return this.nudgeLeft&&(s-=parseInt(this.nudgeLeft)),this.nudgeRight&&(s+=parseInt(this.nudgeRight)),s},computedTop:function(){var t=this.dimensions.activator,e=this.dimensions.content,i=0;return this.top&&(i+=t.height-e.height),!1!==this.attach?i+=t.offsetTop:i+=t.top+this.pageYOffset,this.offsetY&&(i+=this.top?-t.height:t.height),this.nudgeTop&&(i-=parseInt(this.nudgeTop)),this.nudgeBottom&&(i+=parseInt(this.nudgeBottom)),i},hasActivator:function(){return!!this.$slots.activator||!!this.$scopedSlots.activator||!!this.activator||!!this.inputActivator}},watch:{disabled:function(t){t&&this.callDeactivate()},isActive:function(t){this.disabled||(t?this.callActivate():this.callDeactivate())},positionX:"updateDimensions",positionY:"updateDimensions"},beforeMount:function(){this.hasWindow="undefined"!==typeof window},methods:{absolutePosition:function(){return{offsetTop:0,offsetLeft:0,scrollHeight:0,top:this.positionY||this.absoluteY,bottom:this.positionY||this.absoluteY,left:this.positionX||this.absoluteX,right:this.positionX||this.absoluteX,height:0,width:0}},activate:function(){},calcLeft:function(t){return Object(b["f"])(!1!==this.attach?this.computedLeft:this.calcXOverflow(this.computedLeft,t))},calcTop:function(){return Object(b["f"])(!1!==this.attach?this.computedTop:this.calcYOverflow(this.computedTop))},calcXOverflow:function(t,e){var i=t+e-this.pageWidth+12;return t=(!this.left||this.right)&&i>0?Math.max(t-i,0):Math.max(t,12),t+this.getOffsetLeft()},calcYOverflow:function(t){var e=this.getInnerHeight(),i=this.pageYOffset+e,n=this.dimensions.activator,s=this.dimensions.content.height,a=t+s,o=i<a;return o&&this.offsetOverflow&&n.top>s?t=this.pageYOffset+(n.top-s):o&&!this.allowOverflow?t=i-s-12:t<this.pageYOffset&&!this.allowOverflow&&(t=this.pageYOffset+12),t<12?12:t},callActivate:function(){this.hasWindow&&this.activate()},callDeactivate:function(){this.isContentActive=!1,this.deactivate()},checkForPageYOffset:function(){this.hasWindow&&(this.pageYOffset=this.activatorFixed?0:this.getOffsetTop())},checkActivatorFixed:function(){if(!1===this.attach){var t=this.getActivator();while(t){if("fixed"===window.getComputedStyle(t).position)return void(this.activatorFixed=!0);t=t.offsetParent}this.activatorFixed=!1}},deactivate:function(){},genActivatorListeners:function(){var t=this,e=H["a"].options.methods.genActivatorListeners.call(this),i=e.click;return e.click=function(e){t.openOnClick&&i&&i(e),t.absoluteX=e.clientX,t.absoluteY=e.clientY},e},getInnerHeight:function(){return this.hasWindow?window.innerHeight||document.documentElement.clientHeight:0},getOffsetLeft:function(){return this.hasWindow?window.pageXOffset||document.documentElement.scrollLeft:0},getOffsetTop:function(){return this.hasWindow?window.pageYOffset||document.documentElement.scrollTop:0},getRoundedBoundedClientRect:function(t){var e=t.getBoundingClientRect();return{top:Math.round(e.top),left:Math.round(e.left),bottom:Math.round(e.bottom),right:Math.round(e.right),width:Math.round(e.width),height:Math.round(e.height)}},measure:function(t){if(!t||!this.hasWindow)return null;var e=this.getRoundedBoundedClientRect(t);if(!1!==this.attach){var i=window.getComputedStyle(t);e.left=parseInt(i.marginLeft),e.top=parseInt(i.marginTop)}return e},sneakPeek:function(t){var e=this;requestAnimationFrame((function(){var i=e.$refs.content;i&&"none"===i.style.display?(i.style.display="inline-block",t(),i.style.display="none"):t()}))},startTransition:function(){var t=this;return new Promise((function(e){return requestAnimationFrame((function(){t.isContentActive=t.hasJustFocused=t.isActive,e()}))}))},updateDimensions:function(){var t=this;this.hasWindow="undefined"!==typeof window,this.checkActivatorFixed(),this.checkForPageYOffset(),this.pageWidth=document.documentElement.clientWidth;var e={activator:Object(V["a"])({},this.dimensions.activator),content:Object(V["a"])({},this.dimensions.content)};if(!this.hasActivator||this.absolute)e.activator=this.absolutePosition();else{var i=this.getActivator();if(!i)return;e.activator=this.measure(i),e.activator.offsetLeft=i.offsetLeft,!1!==this.attach?e.activator.offsetTop=i.offsetTop:e.activator.offsetTop=0}this.sneakPeek((function(){t.$refs.content&&(e.content=t.measure(t.$refs.content)),t.dimensions=e}))}}}),q=i("e4d3"),tt=i("a236"),et=i("f2e7"),it=i("7560"),nt=i("a293"),st=i("dc22"),at=Object(F["a"])(A["a"],I["a"],L["a"],$,q["a"],tt["a"],et["a"],it["a"]),ot=at.extend({name:"v-menu",provide:function(){return{isInMenu:!0,theme:this.theme}},directives:{ClickOutside:nt["a"],Resize:st["a"]},props:{auto:Boolean,closeOnClick:{type:Boolean,default:!0},closeOnContentClick:{type:Boolean,default:!0},disabled:Boolean,disableKeys:Boolean,maxHeight:{type:[Number,String],default:"auto"},offsetX:Boolean,offsetY:Boolean,openOnClick:{type:Boolean,default:!0},openOnHover:Boolean,origin:{type:String,default:"top left"},transition:{type:[Boolean,String],default:"v-menu-transition"}},data:function(){return{calculatedTopAuto:0,defaultOffset:8,hasJustFocused:!1,listIndex:-1,resizeTimeout:0,selectedIndex:null,tiles:[]}},computed:{activeTile:function(){return this.tiles[this.listIndex]},calculatedLeft:function(){var t=Math.max(this.dimensions.content.width,parseFloat(this.calculatedMinWidth));return this.auto?Object(b["f"])(this.calcXOverflow(this.calcLeftAuto(),t))||"0":this.calcLeft(t)||"0"},calculatedMaxHeight:function(){var t=this.auto?"200px":Object(b["f"])(this.maxHeight);return t||"0"},calculatedMaxWidth:function(){return Object(b["f"])(this.maxWidth)||"0"},calculatedMinWidth:function(){if(this.minWidth)return Object(b["f"])(this.minWidth)||"0";var t=Math.min(this.dimensions.activator.width+Number(this.nudgeWidth)+(this.auto?16:0),Math.max(this.pageWidth-24,0)),e=isNaN(parseInt(this.calculatedMaxWidth))?t:parseInt(this.calculatedMaxWidth);return Object(b["f"])(Math.min(e,t))||"0"},calculatedTop:function(){var t=this.auto?Object(b["f"])(this.calcYOverflow(this.calculatedTopAuto)):this.calcTop();return t||"0"},hasClickableTiles:function(){return Boolean(this.tiles.find((function(t){return t.tabIndex>-1})))},styles:function(){return{maxHeight:this.calculatedMaxHeight,minWidth:this.calculatedMinWidth,maxWidth:this.calculatedMaxWidth,top:this.calculatedTop,left:this.calculatedLeft,transformOrigin:this.origin,zIndex:this.zIndex||this.activeZIndex}}},watch:{isActive:function(t){t||(this.listIndex=-1)},isContentActive:function(t){this.hasJustFocused=t},listIndex:function(t,e){if(t in this.tiles){var i=this.tiles[t];i.classList.add("v-list-item--highlighted"),this.$refs.content.scrollTop=i.offsetTop-i.clientHeight}e in this.tiles&&this.tiles[e].classList.remove("v-list-item--highlighted")}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(Q["e"])("full-width",this)},mounted:function(){this.isActive&&this.callActivate()},methods:{activate:function(){var t=this;this.updateDimensions(),requestAnimationFrame((function(){t.startTransition().then((function(){t.$refs.content&&(t.calculatedTopAuto=t.calcTopAuto(),t.auto&&(t.$refs.content.scrollTop=t.calcScrollPosition()))}))}))},calcScrollPosition:function(){var t=this.$refs.content,e=t.querySelector(".v-list-item--active"),i=t.scrollHeight-t.offsetHeight;return e?Math.min(i,Math.max(0,e.offsetTop-t.offsetHeight/2+e.offsetHeight/2)):t.scrollTop},calcLeftAuto:function(){return parseInt(this.dimensions.activator.left-2*this.defaultOffset)},calcTopAuto:function(){var t=this.$refs.content,e=t.querySelector(".v-list-item--active");if(e||(this.selectedIndex=null),this.offsetY||!e)return this.computedTop;this.selectedIndex=Array.from(this.tiles).indexOf(e);var i=e.offsetTop-this.calcScrollPosition(),n=t.querySelector(".v-list-item").offsetTop;return this.computedTop-i-n-1},changeListIndex:function(t){if(this.getTiles(),this.isActive&&this.hasClickableTiles)if(t.keyCode!==b["p"].tab){if(t.keyCode===b["p"].down)this.nextTile();else if(t.keyCode===b["p"].up)this.prevTile();else{if(t.keyCode!==b["p"].enter||-1===this.listIndex)return;this.tiles[this.listIndex].click()}t.preventDefault()}else this.isActive=!1},closeConditional:function(t){var e=t.target;return this.isActive&&!this._isDestroyed&&this.closeOnClick&&!this.$refs.content.contains(e)},genActivatorAttributes:function(){var t=H["a"].options.methods.genActivatorAttributes.call(this);return this.activeTile&&this.activeTile.id?Object(V["a"])(Object(V["a"])({},t),{},{"aria-activedescendant":this.activeTile.id}):t},genActivatorListeners:function(){var t=$.options.methods.genActivatorListeners.call(this);return this.disableKeys||(t.keydown=this.onKeyDown),t},genTransition:function(){var t=this.genContent();return this.transition?this.$createElement("transition",{props:{name:this.transition}},[t]):t},genDirectives:function(){var t=this,e=[{name:"show",value:this.isContentActive}];return!this.openOnHover&&this.closeOnClick&&e.push({name:"click-outside",value:{handler:function(){t.isActive=!1},closeConditional:this.closeConditional,include:function(){return[t.$el].concat(Object(X["a"])(t.getOpenDependentElements()))}}}),e},genContent:function(){var t=this,e={attrs:Object(V["a"])(Object(V["a"])({},this.getScopeIdAttrs()),{},{role:"role"in this.$attrs?this.$attrs.role:"menu"}),staticClass:"v-menu__content",class:Object(V["a"])(Object(V["a"])(Object(V["a"])({},this.rootThemeClasses),this.roundedClasses),{},Object(G["a"])({"v-menu__content--auto":this.auto,"v-menu__content--fixed":this.activatorFixed,menuable__content__active:this.isActive},this.contentClass.trim(),!0)),style:this.styles,directives:this.genDirectives(),ref:"content",on:{click:function(e){var i=e.target;i.getAttribute("disabled")||t.closeOnContentClick&&(t.isActive=!1)},keydown:this.onKeyDown}};return this.$listeners.scroll&&(e.on=e.on||{},e.on.scroll=this.$listeners.scroll),!this.disabled&&this.openOnHover&&(e.on=e.on||{},e.on.mouseenter=this.mouseEnterHandler),this.openOnHover&&(e.on=e.on||{},e.on.mouseleave=this.mouseLeaveHandler),this.$createElement("div",e,this.getContentSlot())},getTiles:function(){this.$refs.content&&(this.tiles=Array.from(this.$refs.content.querySelectorAll(".v-list-item")))},mouseEnterHandler:function(){var t=this;this.runDelay("open",(function(){t.hasJustFocused||(t.hasJustFocused=!0,t.isActive=!0)}))},mouseLeaveHandler:function(t){var e=this;this.runDelay("close",(function(){e.$refs.content.contains(t.relatedTarget)||requestAnimationFrame((function(){e.isActive=!1,e.callDeactivate()}))}))},nextTile:function(){var t=this.tiles[this.listIndex+1];if(!t){if(!this.tiles.length)return;return this.listIndex=-1,void this.nextTile()}this.listIndex++,-1===t.tabIndex&&this.nextTile()},prevTile:function(){var t=this.tiles[this.listIndex-1];if(!t){if(!this.tiles.length)return;return this.listIndex=this.tiles.length,void this.prevTile()}this.listIndex--,-1===t.tabIndex&&this.prevTile()},onKeyDown:function(t){var e=this;if(t.keyCode===b["p"].esc){setTimeout((function(){e.isActive=!1}));var i=this.getActivator();this.$nextTick((function(){return i&&i.focus()}))}else!this.isActive&&[b["p"].up,b["p"].down].includes(t.keyCode)&&(this.isActive=!0);this.$nextTick((function(){return e.changeListIndex(t)}))},onResize:function(){this.isActive&&(this.$refs.content.offsetWidth,this.updateDimensions(),clearTimeout(this.resizeTimeout),this.resizeTimeout=window.setTimeout(this.updateDimensions,100))}},render:function(t){var e=this,i={staticClass:"v-menu",class:{"v-menu--attached":""===this.attach||!0===this.attach||"attach"===this.attach},directives:[{arg:"500",name:"resize",value:this.onResize}]};return t("div",i,[!this.activator&&this.genActivator(),this.showLazyContent((function(){return[e.$createElement(z["a"],{props:{root:!0,light:e.light,dark:e.dark}},[e.genTransition()])]}))])}}),lt=(i("4160"),i("13d5"),i("4ec9"),i("b64b"),i("ac1f"),i("5319"),i("159b"),i("ddb0"),i("4b85"),i("d9f7")),ct=["sm","md","lg","xl"],rt=["start","end","center"];function dt(t,e){return ct.reduce((function(i,n){return i[t+Object(b["u"])(n)]=e(),i}),{})}var ht=function(t){return[].concat(rt,["baseline","stretch"]).includes(t)},ut=dt("align",(function(){return{type:String,default:null,validator:ht}})),pt=function(t){return[].concat(rt,["space-between","space-around"]).includes(t)},vt=dt("justify",(function(){return{type:String,default:null,validator:pt}})),mt=function(t){return[].concat(rt,["space-between","space-around","stretch"]).includes(t)},ft=dt("alignContent",(function(){return{type:String,default:null,validator:mt}})),Vt={align:Object.keys(ut),justify:Object.keys(vt),alignContent:Object.keys(ft)},Ut={align:"align",justify:"justify",alignContent:"align-content"};function Rt(t,e,i){var n=Ut[t];if(null!=i){if(e){var s=e.replace(t,"");n+="-".concat(s)}return n+="-".concat(i),n.toLowerCase()}}var bt=new Map,Ft=a["default"].extend({name:"v-row",functional:!0,props:Object(V["a"])(Object(V["a"])(Object(V["a"])({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:ht}},ut),{},{justify:{type:String,default:null,validator:pt}},vt),{},{alignContent:{type:String,default:null,validator:mt}},ft),render:function(t,e){var i=e.props,n=e.data,s=e.children,a="";for(var o in i)a+=String(i[o]);var l=bt.get(a);return l||function(){var t,e;for(e in l=[],Vt)Vt[e].forEach((function(t){var n=i[t],s=Rt(e,t,n);s&&l.push(s)}));l.push((t={"no-gutters":i.noGutters,"row--dense":i.dense},Object(G["a"])(t,"align-".concat(i.align),i.align),Object(G["a"])(t,"justify-".concat(i.justify),i.justify),Object(G["a"])(t,"align-content-".concat(i.alignContent),i.alignContent),t)),bt.set(a,l)}(),t(i.tag,Object(lt["a"])(n,{staticClass:"row",class:l}),s)}}),gt=i("2fa4"),Tt=Object(r["a"])(c,n,s,!1,null,"357d16c4",null);e["default"]=Tt.exports;h()(Tt,{VBtn:u["a"],VCard:p["a"],VCardActions:v["a"],VCardText:v["b"],VCardTitle:v["c"],VDialog:m["a"],VDivider:f["a"],VExpansionPanel:g,VExpansionPanelContent:k,VExpansionPanelHeader:E,VExpansionPanels:y,VIcon:B["a"],VImg:O["a"],VList:j["a"],VListItem:J["a"],VListItemAction:w["a"],VListItemContent:Y["a"],VListItemIcon:D["a"],VListItemSubtitle:Y["b"],VListItemTitle:Y["c"],VMenu:ot,VRow:Ft,VSpacer:gt["a"]})},ee6f:function(t,e,i){},fc41:function(t,e,i){"use strict";var n=i("1cd6"),s=i.n(n);s.a}}]);
//# sourceMappingURL=about.ea9748ec.js.map