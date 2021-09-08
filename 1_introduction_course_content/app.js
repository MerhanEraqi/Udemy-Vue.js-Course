const data = {
    data() {
        return {
            courseGoalA: 'this is course goals<',
            courseGoalB: 'Master goals and build vue app',
            vueLink: 'https://v3.vuejs.org/',
            goal: '',
            counter: 10,
            name: '',
            lastName: '',
            confirmedName: '',
            // fullName: '',
        };
    },
    watch: {
        counter(value) {
            if (value == 15) {
                alert('woow your are smart, you know much')
            }
        },
        // name(newValue, oldValue){
        //     console.log('name watch executed')
        //     if (newValue === ''){
        //         return this.fullName = ''
        //     }
        //     return this.fullName = newValue + ' ' + 'last name'
        // }
    },
    computed: {
        fullName() {
            return this.name + ' ' + this.lastName
        }
    },
    methods: {
        confirmName(event) {
            this.confirmedName = this.name;
            event.target.value = '';
        },
        addName(event) {
            this.name = event.target.value;
        },
        setCourseGoals() {
            let random = Math.random();
            if (random < 0.5) {
                return this.courseGoalA
            } else {
                return this.courseGoalB
            }
        },
        addGoal() {
            let content = document.querySelector('.content');
            var node = document.createElement("p");
            var textnode = document.createTextNode(this.goal);
            node.appendChild(textnode);
            content.appendChild(node);
            let popup = document.querySelector('.popup');
            popup.style.display = "none";
            this.goal = '';
            this.counter++;

        },
        removeGoal() {
            let content = document.querySelector('.content p:last-child');
            content.remove();
            this.counter--;
        },
        showPopup() {
            let popup = document.querySelector('.popup');
            popup.style.display = "flex";
        }
    }
}

const app = Vue.createApp(data).mount('#user-goal')