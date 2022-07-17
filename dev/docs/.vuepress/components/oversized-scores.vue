<template>
    <span class="score-type oversized-scores"><slot>{{ $page.regularPath.startsWith("/zh/") ? "大型樂譜" : "Oversized Scores" }}</slot></span>
</template>
