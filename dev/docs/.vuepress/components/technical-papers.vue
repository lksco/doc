<template>
    <span class="score-type technical-papers"><slot>{{ $page.regularPath.startsWith("/zh/") ? "技術文件" : "Technical Papers" }}</slot></span>
</template>
