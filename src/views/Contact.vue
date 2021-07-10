<template>
  <v-card class="mx-auto">
    <v-dialog v-model="pgpKeysDiag" max-width="512">
      <v-card>
        <v-card-title class="headline"
          >PGP Key: {{ base64Decode(pgpMailAddr) }}</v-card-title
        >

        <v-card-text>
          <v-expansion-panels>
            <v-expansion-panel>
              <v-expansion-panel-header>PGP ID</v-expansion-panel-header>
              <v-expansion-panel-content>{{
                pgpMailId
              }}</v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel>
              <v-expansion-panel-header
                >PGP Fingerprint</v-expansion-panel-header
              >
              <v-expansion-panel-content>{{
                pgpMailFinger
              }}</v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn text @click="pgpKeysDiag = false">Close</v-btn>

          <v-btn
            color="primary"
            outlined
            @click="downloadPubkey(pgpMailFinger, pgpMailPubkey)"
            >Download Pubkey</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-img src="@/assets/sp1rit_scaled.svg" height="300px" light>
      <v-row class="fill-height">
        <v-card-title class="imgBtns">
          <v-btn icon @click="goHome()">
            <v-icon>{{ icons.back }}</v-icon>
          </v-btn>

          <v-spacer></v-spacer>

          <!-- <v-btn icon class="mr-4">
            <v-icon>{{ icons.edit }}</v-icon>
          </v-btn>-->

          <template>
            <div class="text-center">
              <v-menu offset-y>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn icon v-bind="attrs" v-on="on">
                    <v-icon>{{ icons.menu }}</v-icon>
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item>
                    <v-list-item-title>Download as VCard</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </div>
          </template>
        </v-card-title>

        <!-- <v-spacer></v-spacer> -->
        <v-card-title class="pl-12 pt-12 titleflex">
          <v-btn text>
            <v-icon>{{ icons.account }}</v-icon>
            <span class="sname">Florian "sp1rit"</span>
          </v-btn>
        </v-card-title>
      </v-row>
    </v-img>
    <v-list-item>
      <v-list-item-icon>
        <v-icon color="primary">{{ icons.socialBio }}</v-icon>
      </v-list-item-icon>

      <v-list-item-content>
        <v-list-item-title>
          Hi 👋, I'm sp1rit.<br/>
          I mainly do higher level Rust development and RPM packaging, but I also do ECMA aswell as EDK2 stuff.<br/>
          0x09 &gt; 0x20, fight me :D.<br>
          <br/>
          If you have any inquiries, please feel free to contact me.
          <br />
          <br />#freeculture, #foss
        </v-list-item-title>
        <v-list-item-subtitle>Biography</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-divider inset />
    <v-list two-line>
      <v-list-item @click="openURI(`https://sp1ritCS.github.io/me`)">
        <v-list-item-icon>
          <v-icon color="primary">{{ icons.socialWebsite }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>https://sp1ritCS.github.io/me</v-list-item-title>
          <v-list-item-subtitle>Website / Blog</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider inset />
      <v-list-item @click="openURI(`https://social.privacytools.io/@sp1rit`)">
        <v-list-item-icon>
          <v-icon color="primary">{{ icons.socialMastodon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>@sp1rit@social.privacytools.io</v-list-item-title>
          <v-list-item-subtitle>Mastodon</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider inset />
      <v-list-item @click="openURI(`https://matrix.to/#/@sp1rit:tchncs.de`)">
        <v-list-item-icon>
          <v-icon color="primary">{{ icons.socialMatrix }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>@sp1rit:tchncs.de</v-list-item-title>
          <v-list-item-subtitle>Matrix</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-list-item @click="openURI(`https://matrix.to/#/@sp1rit:opensuse.org`)">
        <v-list-item-action></v-list-item-action>

        <v-list-item-content>
          <v-list-item-title>@sp1rit:opensuse.org</v-list-item-title>
          <v-list-item-subtitle>Matrix - Fallback</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider inset />

      <v-list-item @click="openURI(`https://github.com/sp1ritCS`)">
        <v-list-item-icon>
          <v-icon color="primary">{{ icons.socialGit }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>sp1ritCS</v-list-item-title>
          <v-list-item-subtitle>GitHub</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-icon>
          <v-icon>{{ icons.socialGitGithub }}</v-icon>
        </v-list-item-icon>
      </v-list-item>

      <v-list-item @click="openURI(`https://gitlab.com/SpiritCS`)">
        <v-list-item-action></v-list-item-action>

        <v-list-item-content>
          <v-list-item-title>SpiritCS</v-list-item-title>
          <v-list-item-subtitle>GitLab</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-icon>
          <v-icon>{{ icons.socialGitGitlab }}</v-icon>
        </v-list-item-icon>
      </v-list-item>

      <v-divider inset></v-divider>

      <v-list-item @click="openKeyDiag(0)">
        <v-list-item-icon>
          <v-icon color="primary">{{ icons.mail }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>c3Axcml0QGRpc3Jvb3Qub3JnCg==</v-list-item-title>
          <v-list-item-subtitle>
            Personal (only send encrypted), encoded in base64
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-list-item @click="openKeyDiag(1)">
        <v-list-item-action></v-list-item-action>

        <v-list-item-content>
          <v-list-item-title>sp1ritCS&#64;protonmail.com</v-list-item-title>
          <v-list-item-subtitle
            >Public, please mail me here.</v-list-item-subtitle
          >
        </v-list-item-content>
      </v-list-item>

      <v-divider inset></v-divider>

      <v-list-item>
        <v-list-item-icon>
          <v-icon color="primary">{{ icons.globe }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>🇩🇪 German, 🇺🇸 English</v-list-item-title>
          <v-list-item-subtitle>Spoken Languages</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import {
  mdiChevronLeft,
  mdiDotsVertical,
  mdiAccountCircleOutline,
  mdiPencil,
  mdiWeb,
  mdiMastodon,
  mdiGit,
  mdiGithub,
  mdiGitlab,
  mdiEmail,
  mdiEarth
} from "@mdi/js";
export default Vue.extend({
  name: "Contact",
  data() {
    return {
      pgpKeysDiag: false,
      pgpMailAddr: "",
      pgpMailId: "",
      pgpMailFinger: "",
      pgpMailPubkey: "",
      mails: [
        {
          addr: "c3Axcml0QGRpc3Jvb3Qub3JnCg==",
          id: "0x73166D09",
          fingerprint: "D248BF2F4C6A82A1E0569D897D8C1CD573166D09",
          pubkey: atob(
            "LS0tLS1CRUdJTiBQR1AgUFVCTElDIEtFWSBCTE9DSy0tLS0tCgptUUlOQkY5QzJwZ0JFQURWSUJVZ2crLzdkUTRvUXU5WHk0RXdKdHphdXYyQk84blBLbktZcXhhV1VtTThETVhPCnQrU3p1WjVpbjd5L285RXFiazlCbmFPdnlEam5IUS9GL25vRVZkWmNHdXZrN2szcDJNM3FobGNwNUhzOFp3dG8KellLMmV0WTFUbnp1aGo4VDJaRFQvK3VjbkM4SWZQUU5HVTJHWC9FVXoyZFlNViswSytiKy9ybytYMGVzanE1VQplK0VRaGFISGtoU2p0VkdBYkZDQXZPNVhka0p1aDlUZmxDMXVEVFU1dXl5ODZuN1JjMEQ1dW5kVUM3endrc1E1Cnd3bDNzNE9zdlNPazZsWnkrTGlDQWZMTEVYS3d1S0Myb0dFeDM2UU1lSEcyOVhLYTRPakJoSjVpa0ZZTWhwemMKMGxudGk1RlVudkpHYWNrVzE2TU5YZXY2MUxZVXhnUXpTSStMdlVxNDhJSnVmb2I0VEdBZEx0Z2ZpS05ad21qRQo1d0luak5iRXY4VXF2eE83ckRYSUhFb0c0SmZYZk94Rlc2eGhQUHRTYVVMb1hBNnpmNnRjOUQyZzk4ajhJbHd6CkxaeEFNdmgzYUpjQkYyb2doR2wwalBUR2FEUDBIZGhHNjNheGh0ZGJJektHRFJ5UE1JclJjYVBqazRPUU5DNmoKY2htRWkyd2IyL1VNUTllYmJXSlJKamh3RTR5YkRGTURSY1JQVGd4bkpQVU84cEtnOEpnaUQzM0E0SkZiRms0agpCSTFkQjNHNUdtK0RlTFI1bVB6emNCYkgxc2ZqRDVsRmlWbW9FVE8yODd1MTBMMFdTdHVhaSt3NjFXb2o3dGJFClBCd0s0L2xwZVZIYUFucDFqQUk1a0NLQWRQTkVMWktHaFdiY2NsNERMdzBHWkZ3MmxzSW1qbHN2K1FBUkFRQUIKdENWR2JHOXlhV0Z1SUNKemNERnlhWFFpSUR4emNERnlhWFJBWkdsemNtOXZkQzV2Y21jK2lRSk9CQk1CQ0FBNApGaUVFMGtpL0wweHFncUhnVnAySmZZd2MxWE1XYlFrRkFsOUMycGdDR3dNRkN3a0lCd0lHRlFvSkNBc0NCQllDCkF3RUNIZ0VDRjRBQUNna1FmWXdjMVhNV2JRbHAreEFBaU95RUtsS2xJSGpraHZ5dUNPM3JjMmhjMnJ2bG8reTIKK2pXRi9Pak1WeXB0ay81TVg2SnkvYUtCajFUZTB2NmorSGt4MnZGbHVnK2cySnArTmR2RE5VZWhQOUZobkc1aQpYUU9COW5HL0FSWWxjZGJXMkdxUUwybHhXMlkwVlJFMDdXUWVRbzhtbDBxRGZuNlZ5YWtrOXFkM0YzNE9RbFAxCjYxQzhaVGtuRkNnSk1QMEw4M2llNUNNTkt4YlJoZGV6WmpMTTZuVVpFL1ByY2hBSXpRRlYwLzFXVkhRTE1VUEsKUW1JbnpRaEtUY1lvWEwycDRtdlEyUmhIeG5WT2hSMHF0K1J0dEFFUmVFeCtoMFJmdWFBWlg3WFpGbnpjQ2hybQp1SGNuY0JnTXg2ZWlDZ2hpMm5EMStPTDBvTkFybnd6YjZKRTBRVE9aa2l0VXJhb1JicUlsNUhlTVE2K0s5TzBJCmN0NnY1eUFDM1BSVmVIZ25UL21tU3JXN0NqZUdKQVdEZ05TVXR4Yk9KNUcvMi9Odjg1RjFXMGg5VXhCTlBFTTUKY0lXUCs0UDRVTFk1cmpHTjFNS3RwbjliNVUxUTVRVk9MRC9rWlNrMGFuOEE0V1k5VUdmOU03Z0FzUmdMVlJGYgowdzQwUWZwVUJzNmYxY0NWcDBZK28vblBlNG0xWXlBdThsQm50YUxoR1kvWERtMnpWTXFNTVg1OWZjRngzODJECklsZVhubDNUTGNKNWptWml5cWJ2ZHhIMnlVODFPTUNiVGJzQzdUbnByQ1VJbFZ0cWVURUtjU3F3bTh3UnprdisKb0VmUE5hakg3NVFnMi81RXg0ZHk2Z2ZzTFZ4cUY4MTBNeDBZVEprb1ZaRzlJNWgyTXBpZDJ4L05JeEpvVmZDKworNWlYL3ZnWGltVzVBZzBFWDBMYW1BRVFBTW8yQkM0a2F4Tk9tcEE4bld4QThncDY1QjFuQUY2MkNXTU8vdERNCnBWRWJETjJuMUV6K0s4QlNFU0l4Y0xGVUNVZERVdUVYQWZqUmF5K25XdkMwWUxOVUFkWVErYTF1VmFYV3h6ajQKMitIc3dpU3hEaXowWXo5L0xJMHNscThQclR5VmdDQjBHS2NTdCswZ2t5dHhicEFMY3lsVWU1Rmp0SDdqVG1sSApyV0daWFVIRjJGdkpvaDJJWE5iN1ZidHFjVHBWYTl6OUU3SGs3MXBZTXZhdUxMZmVFTDhxMkMwSmxqYlhJQ1NTCmRVaDM5STNkUG01RnBSUk5qWVN4RWJuYjluUXRUUWRYYm9oVDM1VDNNaWZBM1JJSGpLaHNIOXdIWHM4ZlNmMUgKQVEvUzViQlBQcHpvbHpjay9NUmt0a2tOTUtaMEpmN2dzNjJlY1RSNjgxNUx3anRKQlk3UmdQbXc4S0NOalNMRgpSSjFwWUxWR2FyYUkrV1dvVHNjS1pmOGdLYmd0WloxamdUbFhUemhUVTBsRkJUV00rSmZYeUJ1RktXbHZBUlVuCjBaRkh2bFpKU2h0UXN5WVRRSnRSSE5ESHc2RUtyRGFWcXF2OGFvMmwzMmp4NDhobFpjam16ZlRCaS9EeE96M0oKOXFRY3RsSjJmYW5pNnBWZHRWdGRGWEtQTWJnNXQzTDMxd2k5eU51c016V3JldElZbWo5V3EvWmZxQjhxeFZsQQpHSkdGY3VkbWVlTWtYZHdKM0U5TE5JQnZya0hKd2tnN1BTUjAxWitFUzZFTmp3Tk84YWNpWWxKdWFFWGh3eEhOCkNvYVl1M1NhQ2xMU29GcGRuSWJWSzRLTStXZTJQeVM4S0RscmowUHRja3I2M05aQlNsL3VXL0tZYTdhSkthUFUKMkRDRkFCRUJBQUdKQWpZRUdBRUlBQ0FXSVFUU1NMOHZUR3FDb2VCV25ZbDlqQnpWY3hadENRVUNYMExhbUFJYgpEQUFLQ1JCOWpCelZjeFp0Q1NuVkQvOVZCWkRPbjU0a1crZjRYRmJscVdjZGNnejBIbFN2eHkvRnhjVEhscEI2ClRjdkVBdGIyM0I5U1Jwdmg0N2Ixc2t5WU9XdTFuVThyU1BMelZlY3JnTVBQQmJRbllVcUdJaGRFVXFldWR3NVUKem82dFpmZmRHb2tsaGxPbGpZdjkzWDZjeU81TUY4VnJPTUtZL2VhRjRZL3kxbnBsWEd4aTRQdjBONEZMREVSawo0TTBncjFnRmNuRVFLSWVnYUdNNkJpWUlQRXhVNlplVm9SQkd4S3IxL3NLWjN3SGliRUJBZWR0aTVZR08xOVpnCnk4QXd3cEdhUEVUYnFQM0xrMWdTSVRORTliT1BOWkdITkduaWQrVFlIMStwaElESE5jQVZTY0ZnanIrNUdCa3kKTkx2ZkhwT0xCaU94T09pbGlPRUpCdUIvZzljY1hJWU1WREZta1psck9JV3ozYzg2M242aTRCV0JOaFJKMlB1dgpNSGtmRGtTY2tHNzlOdDZBeks1WkxhQUVScWl1MnF6RmlZRlhCVE5oUFRORnNiRlhZem0rWjZ3ZVpzcVlzNHlpCk42ck9zWHFJS21Cd1l5ZVJHa1FTVEV3V003OXR0MkZ5Z29Vcjlia1dtRklnNTFpWURkQk1RRUhLZ0VIc1VacU0KUEpVQmhIMHdiQ3U0QS82NzhzWGc3NUVESEt4SFdZS2xidTZtSWhEV3J3bGJ0V0syZFdocUt0bHJYSExCREltSQpjVDZRZ09wZ0JHMGxnaUFvc2dJQ2dsbzZ3d3k1aUo2NzRpZmlvOWk4NVBISU4wWTJDbk1rUFlSZ2o3b2xteE1XCjZTMGtRcVRCS21MQUY2b2kxQ2dUZ1hwQWZFVFFJNWhFWjdQQVovZTNXUVBhSmNzZ0Nvb1NQODJ2Q1FUYmg1T1MKZ0E9PQo9b3ZiRgotLS0tLUVORCBQR1AgUFVCTElDIEtFWSBCTE9DSy0tLS0tCg=="
          )
        },
        {
          addr: "c3Axcml0Q1NAcHJvdG9ubWFpbC5jb20K",
          id: "0xAC81FB05",
          fingerprint: "05EF520E8E512D5C47C7FC78BA579378AC81FB05",
          pubkey: atob(
            "LS0tLS1CRUdJTiBQR1AgUFVCTElDIEtFWSBCTE9DSy0tLS0tCgptUUdOQkYxVEVSVUJEQURZS1hYcW9hbWlGTlBORkEvQlRZSEJuc1Vnc1hTQXV2TUpvYXluZENiUHluazczZ1JoCk45ZTE1THVhNS9mRzZQZk5ldVRBSERvTmxYV2Q0QTNnaFpaVFg1TUhsWDc4am1yc1RPNlkwWlpIRnRzQnRIaVQKSDRuRWt1b1VlTEZBTU1SZ3FWN08xUDNlOGFUVjNyeURJV3NUR1lXU0tUZU4rVzc4UlNDeWFwU2hPRHNTQ0hQRApZRm1YL014YSsxR1p5WkJRYUo4NEZpRkl6YXJUaERlTzdheDZWVy9tS0ZsOVdzSU1reDAvME9ZYXphZ0hIZVJOCjkxOGJ2TjRhUlRkdjhyS200K0RTV3pUby9tYStTQm9JN0tVL3JNcHJCZUlnL1pTcXFHR3FBdUNJS01kemZVRWEKbHFTcGdmZWpxSjU3WjVUY0lwdjJMK2IrcTllcTRmalFmRXY2cFlWQ2JsblhoTVhDNVcydlh1WFFUeVd4b1JvZwpHV1Q2NXVxK24yczdGR2Q4WHp3T3JJajg2ZGQ0OExYSHZuOVN5cnkzSFVrZmc2REU4cUhNUldrOTQycndNb2tHCm5XLzFrdW1yRmlyeEsxc3M3WS9scTVydUxPYndsN3dWRWU2NE92OUpRYWFTTW5nOGpSSkViS0RzNFVvS2U1OXoKczhYRFZTTDlrT25TWGdFQUVRRUFBYlFjVTNCcGNtbDBRMU1nUEhOd2NtbDBZM05BWjIxaGFXd3VZMjl0UG9rQgpzQVFUQVFvQUdnUUxDUWdIQWhVS0FoWUJBaGtBQllKZDhVcFpBcDRCQXBzREFBb0pFTHBYazNpc2dmc0ZsZkVNCkFNUHcxbFgrSXptbkpYMWVnYVY4Rmx4NE5EQSswV3d5dGtlU2lpbitBdktXOXFFaEE3ZUJEVnp1RTBkK2o5aWcKQ1Z1QXNCcGZCdGl6QWJ3VXhNRHcwNCtHL3NOMmcwQUExbFBVOG0xam9TWm1hYTlmblZTaWFGNDBoWXpZR3dkdgpzRENqRDdkcjVjOTUzQktGRXhDMC9ZTDVKdmhTLzI2VmdNNXFoTlNjT0NuVUllQW9xakI2Tmw4UCs0ZEU4SDREClRIazVRTzJ2cXZrZHQzWEppL2xZQU9QUnZ3V2hpbVEyd1JNdjBzdVVOMmpPRzlOWC9xNzJOSlpTelRGZ1JGZG4KTHBTdWNVUWZWZGJoTm1WWFl5WDN1aXNLU0daTVR1S2x6dkhtUTZoUW5YNm1DWkdnaWpPSW8weGpJS3FwQmVZbgptV3RORi9WZzFjUzZ6c1lRbjNqSmhrdkxEYXlpS2dlMmdtS0IyMzBzY1FsM2N2bWtKeTV6VjBQa2xIcXFjMmcyCjlPbjdoRnBtMURQNXNBUnVEVW94ZkVEOU9pK05DbkJiNW5CNFllT2FVOHErSXZzVmJOOGRXN2lRdXZMTWhiUVIKaktBOW0rNWhtWVE4dVVHK1huQ0JrZDBISC9XRXBWRTArOEw3TU1QejhpQ3J1UzhTVGd6d0tRUTI3V1REbm1rNAoyTFFpYzNBeGNtbDBRMU1nUEhOd01YSnBkRU5UUUhCeWIzUnZibTFoYVd3dVkyOXRQb2tCc0FRVEFRb0FHZ1FMCkNRZ0hBaFVLQWhZQkFoa0JCWUpkOFVwWkFwNEJBcHNEQUFvSkVMcFhrM2lzZ2ZzRitwWU1BTXRPWEUxMXJjY1QKUCtKTFZ0RXNRd25FcWFEUWFvc2hJckRWZys5RWt3U0xoRUlScEsrV2dsUnZ3eFB0WllWS1dWMC9TRjkrOFQzQQpvK2dpYmQrNjdjdWJGbiszOVd2S1ZuZWFiQUJZK2R0MlIyMDNaTm4ySHpIQXNEZFp6WWlsWHJmc3Nxb3NOZ29MClVBajB3ZDRUWitxSkRXVW1CUDNvNUFGamNjaGpHTkYrRnlwZ3U3QUVVSTA2ZGFnMGJ4ZmpsNGFFTzA1MVNISFUKbm5pbUJnanR1L3BPZ1pHQVVFUmp0NHFyaDZ2a0N1RTJUSTQzZW5OUUU0ZExUdGY1RDVuQ0RGTkl4bTBISEduVwpDOUoxckRQUkpMajBHaFBWbFRheDBvMHpMbXk4UzN6SE5uRlRhVTVqam1WZDNFcEdlZTJvRGdYYzY1V2RtcEFCCmxWTUI4ZXU3VWtDNmRBR1RsVFZzV0tpQ2duQ2FyNVB0aG5LRVFtemxrVm9TN2MxZjhndWxWcjhwQS9lU1U1Mi8KOW1kbWZ6dUxpbm5BcUhUYnc2TGZpKzlnQTM4czUxQmdOcTQ3TkFKZ2xuVGpHUHNKZVBqa3RXcm0yRkJwV1pKMwplbFU5dEd1YW1HdzQrVURQM0NlYldudm1sdWtpRXBKTFVPdjN3SXhBdEVvcFIzSHNiMFkxWkxrQmpRUmRVeEVWCkFRd0FvaWxpUG42VW1WN2pYbzZ1NjdXOE5IUFpwa0wvSDJyMzMrOGFBNmlFQ1U3V3V5UDhTWmZjUTlzY1p2T0sKMU9lbExFMFZ1RHRwNVU0cGN2SzRoSCtEM2dZNlNwZi9tVnlKVEFMT0R5cjJQMFRFclhxcG9WMmZHVW4wSkc5UQpTNmdBdXZiS2lJRElsQlozeTR5TXlEZ0lITXRrQkt1QnBNTFJ0N2RqL0svNDFRV0p3dEVoeGorWEJyeE8zcis2Cnd3WGlMUDh1MlNrN2hreGs2ZXFhMnpBR0s5Zzd3RTJPcHlLeDlFOTE1dUY1WEN2QW5SOGptclRGUEFDYys1SE8KdnFTSDJZOU5jMERIdHhzS2J0QzJpaW1oSDBPTnBGNi9UUTYyd3JxOHlCdDkzQjhKWDAyVkZDVy8ybnVkQ253bQpTR0RzS0FTdUR1eGZXdUk5QUkrTjlvQ2FuaGNyMUp0SVdESzE0OVFlcWlzN3hQT09IMmRUd3BxRnpNYnVtSkpZCjMxT1J4NlhHUXY5M2syMVpFaE9vaTZOVnNKT3VuUXY0SHErNmFSdDZwVzhhMlVXcFdkNU1rL292WGRuWEw1d2cKSTZ2UDBZWEJUN0JLNXQ2QW9wVm9lNHg5YXc2ckYvM2RaZUNmUEF3TitRemZ3dVR4WWRxTDNwSjEzaTcvVVlzegpGVUdIQUJFQkFBR0pBWjhFR0FFS0FBa0ZnbDFURVJVQ213d0FDZ2tRdWxlVGVLeUIrd1czNHd2OUdacjIwSnkrCnpFMXY3RTJUeGlQejdCb3B3dElaaUNKdVVrM01oQ2tKWnpqcTZ3ZmlidStFL3RCSnRISEc2YmFYVnMwOEphRnkKNGU4UUhxSGxORCtDcG8wcnpUaHJiU2t6bEFjbEc2aWg3QnM3bWF2LytMcmRQd2Y1dDNqWVpNRWkxdlJCK2dtVQprRUExNU9zVCsrRnFmdnFNRi80S29YNUx4MjNSMmZ2Yzd5cDRhM2tIWDdXNHRFRkNobzBnQ0R3a1FSRnh4czZYCmd0cWpIc1IwUVU0Q1Q4b1dCY3hyNlVNUnpoYUZqSlp3MVRNK1VZRlhNSG1iOXBXWjBkdHdwTlhaZFZFM3Jrei8KUDM4cXRMdWlIVElaYVFwOHdobnJzc21XdE1WSmFtUHBUS3ZCd1dzNE92SDFYMDM5ZGNuWDVOMjRrQ2tXdytrcwplSlYzRUxtdnNnWUNmMlJHeVVick9BQzczWmcybXZkd3lYSFlITzd4ZGx6VkhNUmhtTzFoT3RQRUE2bTJzWlJyCnczdGt3WElzV1lJR2lQMDRxSFRpWS9SSFluaGlUZTVvZjFKRGlKZU1MNzd0YUk4Nkp5VGhZN29PWFRkcENuZWUKYmlSNUlIbzdtTFJwRmpMclhyN1JSdkdFZjBXOXRxdExtU2QwUUJJbit2YlVrN3FOa3JhdUxGeXIKPVBaL2kKLS0tLS1FTkQgUEdQIFBVQkxJQyBLRVkgQkxPQ0stLS0tLQo="
          )
        }
      ],
      icons: {
        back: mdiChevronLeft,
        menu: mdiDotsVertical,
        account: mdiAccountCircleOutline,
        socialBio: mdiPencil,
        socialWebsite: mdiWeb,
        socialMastodon: mdiMastodon,
        socialMatrix: `M 1.2293314,2.9999999e-8 V 24 H 3.5099889 V 23.450538 H 1.8618809 V 0.54932299 h 1.648108 V 2.9999999e-8 Z m 19.2605416,0 V 0.54932299 H 22.13812 V 23.450538 H 20.489873 V 24 h 2.280796 V 2.9999999e-8 Z M 10.860785,7.5776509 c -0.562792,0 -1.0624743,0.1216628 -1.4983565,0.3640809 C 8.9262617,8.1845782 8.5539706,8.5271299 8.2448553,8.968286 H 8.2118722 V 7.8093766 H 5.9934254 v 8.5592514 h 2.350802 v -4.966731 c 0,-0.419351 0.060685,-0.758545 0.1821796,-1.018064 C 8.6478299,10.124669 8.7937829,9.9259837 8.9650861,9.7878857 9.1360327,9.6501458 9.3127907,9.5561412 9.4949249,9.5064746 c 0.1819204,-0.049808 0.3281586,-0.074602 0.438679,-0.074602 0.3752421,0 0.6594051,0.063766 0.8525841,0.1902529 0.193108,0.1271233 0.331105,0.2955683 0.413906,0.5050645 0.08294,0.209854 0.129726,0.43891 0.140985,0.687385 0.01062,0.248189 0.01642,0.499394 0.01642,0.753213 v 4.800975 H 13.7083 v -4.767846 c 0,-0.264865 0.0192,-0.527104 0.05804,-0.786338 0.03854,-0.259521 0.115861,-0.491159 0.231725,-0.695596 0.115794,-0.2039387 0.275648,-0.3697302 0.480015,-0.4968535 0.204224,-0.126482 0.471976,-0.1902529 0.803039,-0.1902529 0.331062,0 0.593297,0.055534 0.786476,0.1654792 0.192894,0.1104491 0.339275,0.2595514 0.43868,0.4470292 0.09934,0.187906 0.159876,0.408518 0.182179,0.662195 0.02216,0.254032 0.03313,0.524437 0.03313,0.811249 v 4.850799 h 2.35108 V 10.64061 c 0,-0.552031 -0.07745,-1.0236233 -0.231865,-1.4158256 C 18.685949,8.8332959 18.470716,8.5159562 18.19502,8.2729682 17.91904,8.0301937 17.587942,7.853647 17.201869,7.7432689 c -0.386643,-0.1103776 -0.805862,-0.165618 -1.25842,-0.165618 -0.59614,0 -1.112158,0.1436567 -1.54804,0.4304679 C 13.959241,8.2950728 13.61446,8.6262386 13.360783,9.0014094 13.128983,8.4715385 12.78951,8.1020391 12.342441,7.8921858 11.895514,7.6826886 11.401489,7.5776509 10.860785,7.5776509 Z`,
        socialGit: mdiGit,
        socialGitGithub: mdiGithub,
        socialGitGitlab: mdiGitlab,
        mail: mdiEmail,
        globe: mdiEarth
      }
    };
  },
  methods: {
    openURI(uri: string) {
      const win = window.open(uri, "_blank");
      win?.focus();
    },
    openKeyDiag(index: number) {
      const key = this.mails[index];
      this.pgpMailAddr = key.addr;
      this.pgpMailId = key.id;
      this.pgpMailFinger = key.fingerprint;
      this.pgpMailPubkey = key.pubkey;
      this.pgpKeysDiag = true;
    },
    downloadPubkey(finger: string, asciiKey: string) {
      const element = document.createElement("a");
      element.setAttribute(
        "href",
        "data:text/plain;charset=utf-8," + encodeURIComponent(asciiKey)
      );
      element.setAttribute("download", `${finger}.pub.asc`);
      element.style.display = "none";
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
      this.pgpKeysDiag = false;
    },
    base64Decode(ascii: string) {
      return atob(ascii);
    },
    goHome() {
      this.$router.push("/");
    }
  }
});
</script>

<style lang="scss" scoped>
.imgBtns {
  width: 100%;
  align-items: flex-start;
}
.titleflex {
  align-items: flex-end;
}
.sname {
  font-weight: bold;
}
</style>
