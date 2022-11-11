<template>
  <div>
    <div i-carbon-campsite text-4xl inline-block />
    <p>
      <a rel="noreferrer" href="https://onu.zyob.top/" target="_blank">
        OnuUI Starter
      </a>
    </p>
    <p>
      <em text-sm op75>Opinionated OnuUI Starter Template</em>
    </p>
    <div mt-4>
      <o-button @click="hanleDebug">
        Hello OnuUI
      </o-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { OMessage } from 'onu-ui'

function hanleDebug() {
  OMessage({
    content: 'Hello OnuUI!',
    closable: true,
  })
}
</script>
