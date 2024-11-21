<template>
    <div>
        <div class="page" v-for="(slide, index) in slides" :key="index" v-show="step === index + 1">
            <card class="card">
                <h3 v-if="show_title">{{ slide.title }}</h3>
                <p class="description" v-if="show_text">{{ slide.text }}</p>
                <div class="grid-3-box" v-if="show_buttons">
                    <Button2Component @click="prevSlide" :transparent="true" v-if="index !== 0" style="margin-right: auto;">
                        Back
                    </Button2Component>
                    <br v-else>
                    <p class="step-text">Step {{ step }} of {{ slides.length }}</p>
                    <Button2Component @click="nextSlide" style="margin-left: auto;">
                        {{ index === slides.length - 1 ? 'Finish' : 'Next' }}
                    </Button2Component>
                </div>
            </card>
        </div>
    </div>
</template>

<script>
import Card from '@/components/CardComponent.vue';
import Button2Component from '@/components/Button2Component.vue';
export default {
    name: "AdaptationView",
    components: {
        Card,
        Button2Component
    },
    data() {
        return {
            step: 1,
            show_title: false,
            show_text: false,
            show_buttons: false,
            slides: [
                {   
                    title: "What is Lorem Ipsum?",
                    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." 
                },
                {   
                    title: "Why do we use it?",
                    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)." 
                },
                {   
                    title: "Where does it come from?",
                    text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 'Lorem ipsum dolor sit amet..', comes from a line in section 1.10.32."
                 }
            ]
        }
    },
    mounted() {
        this.initializeStep();
        this.showElements();
    },
    methods: {
        initializeStep() {
            const id = this.$route.params.id;
            if (id && !isNaN(id)) {
                this.step = parseInt(id);
            }
        },
        showElements() {
            setTimeout(() => {
                this.show_title = true;

                setTimeout(() => {
                    this.show_text = true;

                    setTimeout(() => {
                        this.show_buttons = true;
                    }, 500)
                }, 500)
            }, 500)
        },
        nextSlide() {
            if (this.step < this.slides.length) {
                this.step++;
                this.show_title = false;
                this.show_text = false;
                this.show_buttons = false;
                this.showElements();
                this.$router.push({ name: 'adaptation', params: { id: this.step } });
            } else {
                this.$router.push({ name: 'finish' });
            }
        },
        prevSlide() {
            if (this.step > 1) {
                this.step--;
                this.show_title = false;
                this.show_text = false;
                this.show_buttons = false;
                this.showElements();
                this.$router.push({ name: 'adaptation', params: { id: this.step } });
            }
        }
    }
}
</script>

<style scoped>
.grid-3-box{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    animation: show .5s;
    position: relative;
    margin-top: auto;
}
.description{
    font-size: clamp(14px, 3vw, 24px);
    max-height: calc(10 * 1.5em);
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 10;
    text-align: end;
    max-width: 70%;
    margin-left: auto;
}
h3{
    max-width: 70%;
    font-size: clamp(20px, 7vw, 50px);
    text-align: start;
}
h3, .description{
    animation: show .5s;
    position: relative;
}
.page{
    height: calc(100vh - 160px);
    width: calc(100vw - 160px);
    padding: 80px;
    display: grid;
    position: relative;
}
.card{
    display: flex;
    flex-direction: column;
}

@media (max-width: 1000px){
    .page{
        width: 100vw;
        height: 100vh;
        padding: 0;
    }
    h3, .description{
        max-width: 100%;
        text-align: center;
    }
}
</style>