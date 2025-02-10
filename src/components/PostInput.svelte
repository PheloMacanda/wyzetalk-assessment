<script>
    let postText = '';
</script>

<div class="post-input">
    <textarea bind:value={postText} placeholder="Share something"></textarea>
    <button>📷</button>
</div>

<style>
.post-input {
    display: flex;
    align-items: center;
    background: white;
    padding: 10px;
    border-radius: 5px;
}

textarea {
    flex: 1;
    border: 1px solid gray;
    padding: 8px;
    font-size: 14px;
    background-color: #ffffff;
}

button {
    background: none;
    border: none;
    font-size: 20px;
    cursor: pointer;
}
</style>