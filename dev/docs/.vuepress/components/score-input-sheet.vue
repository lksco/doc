<template>
    <span class="score-list score-input-sheet"><slot>{{ $page.regularPath.startsWith("/zh/") ? "存譜輸入清單" : "Score Input Sheet" }}</slot></span>
</template>
