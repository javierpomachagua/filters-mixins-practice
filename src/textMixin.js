export const textMixin = {
    computed: {
        countTextMixin() {
            return this.text + ' (' + this.text.length + ')';
        }
    }
}