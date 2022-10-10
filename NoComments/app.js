var app = new Vue({
    el: '#app',
    data: {
        inputUsername: '',
        inputComment: '',
        comments: []
    },

    methods: {
        inputChangeUserName(event) {
            this.inputUsername = event.target.value;
        },
        inputChangeComment(event) {
            this.inputComment = event.target.value;
        },
        addNewComment() {
            var captcha = grecaptcha.getResponse();
            if (captcha.length) {
                if (this.inputUsername !== '' && this.inputComment !== '') {
                    axios.get('add.php',
                        {
                            params: {
                                username: this.inputUsername,
                                comment: this.inputComment
                            }
                        })
                        .then(function (response) {
                            app.comments = response.data;
                        })
                        .catch(function (error) {
                            console.log(error);
                        });
                    alert(this.inputUsername + ", ваш комментарий успешно добавлен!");
                    this.inputUsername = '';
                    this.inputComment = '';
                }
            } else {
                alert(this.inputUsername + ", вы не заполнили поле Я не робот!");
            }
        },
        removeComment(id) {
            axios.get('delete.php',
                {
                    params: {
                        id: id
                    }
                })
                .then(function (response) {
                    app.comments = response.data;
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        read: function () {
            axios.get('read.php')
                .then(function (response) {
                    app.comments = response.data;
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    },
    beforeMount(){
        this.read()
    }
});