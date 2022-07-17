<template>
    <span class="score-type regular-scores"><slot>{{ $page.regularPath.startsWith("/zh/") ? "常規樂譜" : "Regular Scores" }}</slot></span>
</template>
