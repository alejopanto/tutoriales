<template lang="pug">
    .card   
        .card-image
            figure.image.is-1by1
                img(:src="track.img")
        .card-content
            .media
                .media-left
                    figure.image.is-48x48
                        img(:src="track.img")
                .media-content
                    p.title.is-6    
                        strong {{track.name}}
                    p.subtitle.is-6 {{track.artist}}
            
            .content
                small {{track.duration}}
                nav.level
                    .level.left
                        a.level-item
                            span.icon.is-small(@click="selectTrack") PLAY
</template>

<script>
export default {
    props: {
        track: { type: Object, required: true}
    },
    methods: {
        selectTrack(){
            this.$emit('select', this.track.id)
        }
    },
}
</script>