var app = new Vue({
    el: '#app',
    data: {
        inputUsername: '',
        inputComment: '',
        comments: ''
    },

    methods: {
        inputChangeUserName(event) {
            this.inputUsername = event.target.value;
        },
        inputChangeComment(event) {
            this.inputComment = event.target.value;
        },
        addNewComment() {
            if (this.inputUsername !== '' && this.inputComment !== '') {
                this.comments.push({
                    date: date = new Date().toLocaleDateString("ru-RU"),
                    username: this.inputUsername,
                    comment: this.inputComment
                });
                this.inputUsername = '';
                this.inputComment = '';
            }
        },
        removeNote(id) {
            this.comments.splice(id, 1);
        },
        allRecords: function () {

            axios.get('ajaxfile.php')
                .then(function (response) {
                    app.comments = response.data;
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }
});