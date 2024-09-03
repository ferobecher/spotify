<script setup>
import HomeCard from '../components/HomeCard.vue'
</script>

<template>
    <div class="p-8">
        <button
            type="button"
            class="text-white text-2xl font-semibold hover:underline cursor-pointer"

        >
            Albums picked for you
        </button>

        <div class="py-1.5"></div>

        <div class=flex items-center>
            <HomeCard image="/images/albumCovers/DiariesOfAHero300.png" title="Diaries Of A Hero" subTitle="Diaries Of A Hero" :id="1"/>
            <HomeCard image="/images/albumCovers/RageAgainstTheMachine300.png" title="Rage Against The Machine" subTitle="Rage Against The Machine" :id="2"/>
            <HomeCard class="md:block hidden" image="https://picsum.photos/id/65/300/300" title="Title is here" subTitle="Subtitle is here" :id="1"/>
            <HomeCard class="lg:block hidden" image="https://picsum.photos/id/67/300/300" title="Title is here" subTitle="Subtitle is here" :id="1"/>
            <HomeCard class="xl:block hidden" image="https://picsum.photos/id/100/300/300" title="Title is here" subTitle="Subtitle is here" :id="1"/>
        </div>
    </div>
    <div class="p-8">
        <button
            type="button"
            class="text-white text-2xl font-semibold hover:underline cursor-pointer"

        >
            Recommended radio
        </button>

        <div class="py-1.5"></div>

        <div class=flex items-center>
            <HomeCard image="https://picsum.photos/id/30/300/300" title="Title is here" subTitle="Subtitle is here" :id="1"/>
            <HomeCard image="https://picsum.photos/id/45/300/300" title="Title is here" subTitle="Subtitle is here" :id="1"/>
            <HomeCard class="md:block hidden" image="https://picsum.photos/id/65/300/300" title="Title is here" subTitle="Subtitle is here" :id="1"/>
            <HomeCard class="lg:block hidden" image="https://picsum.photos/id/67/300/300" title="Title is here" subTitle="Subtitle is here" :id="1"/>
            <HomeCard class="xl:block hidden" image="https://picsum.photos/id/100/300/300" title="Title is here" subTitle="Subtitle is here" :id="1"/>
        </div>
    </div>
    <div class="p-8">
        <button
            type="button"
            class="text-white text-2xl font-semibold hover:underline cursor-pointer"

        >
            Recommended Songs
        </button>

        <div class="py-1.5"></div>

        <div class=flex items-center>
            <HomeCard image="https://picsum.photos/id/30/300/300" title="Title is here" subTitle="Subtitle is here" :id="1"/>
            <HomeCard image="https://picsum.photos/id/45/300/300" title="Title is here" subTitle="Subtitle is here" :id="1"/>
            <HomeCard class="md:block hidden" image="https://picsum.photos/id/65/300/300" title="Title is here" subTitle="Subtitle is here" :id="1"/>
            <HomeCard class="lg:block hidden" image="https://picsum.photos/id/67/300/300" title="Title is here" subTitle="Subtitle is here" :id="1"/>
            <HomeCard class="xl:block hidden" image="https://picsum.photos/id/100/300/300" title="Title is here" subTitle="Subtitle is here" :id="1"/>
        </div>
    </div>
</template>
