<template>
    <span class="score-list regular-score-list"><slot>{{ $page.regularPath.startsWith("/zh/") ? "常規存譜總表" : "Regular Score List" }}</slot></span>
</template>
