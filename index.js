var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!'
    }
  })

var app2 = new Vue({
  el: '#app-2',
  data:{
    mydata:'I love Gin and Tonic'
  }
})

var app3 = new Vue({
  el:'#app-3',
  data:{
    iCanControlIt:false
  }
})

var app4 = new Vue({
  el:'#app-4',
  data:{
    todos:[
      { text: 'Learn JavaScript' },
      { text: 'Learn Vue' },
      { text: 'Build something awesome' }
    ]
  }
})

var app5 = new Vue({
  el:'#app-5',
  data:{
    myMessage:'Hello! vue.js!'
  },
  methods:{
    reverseMessage:function(){
      this.myMessage = this.myMessage.split('').reverse().join('')
    }
}
})

var app6 = new Vue({
  el:'#app-6',
  data:{
    inputMessage:'Hello '
  }
})

Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})

var app = new Vue({
  el: '#app7',
  data: {
    groceryList: [
      { id: 0, text: 'Vegetables' },
      { id: 1, text: 'Cheese' },
      { id: 2, text: 'Whatever else humans are supposed to eat' }
    ]
  }
})