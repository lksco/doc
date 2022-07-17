<template>
    <span class="score-list special-score-list"><slot>{{ $page.regularPath.startsWith("/zh/") ? "特別存譜總表" : "Special Score List" }}</slot></span>
</template>
