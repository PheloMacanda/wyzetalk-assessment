<script>
    import Icon from "@iconify/svelte";
</script>

<div class="card urgent">
    <div class="card-header">
        <div class="icon">
            <Icon icon="mdi:alert-circle" />
        </div>
        <div class="text">
            <strong>Urgent Updates</strong>
            <p>8 hours</p>
        </div>
        <div class="pin">
            <Icon icon="mdi:pin" />
        </div>
    </div>
    <div class="card-body">
        <h2>Fire in warehouse B! Immediate Evacuation.</h2>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button class="details-btn"> More details → </button>
    </div>
</div>

<style>
    .card {
        background: white;
        border-radius: 10px;
        padding: 15px;
        margin-bottom: 15px;
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
    }

    .urgent {
        border: 1px solid red;
    }

    .card-header {
        display: flex;
        align-items: center;
    }

    .icon {
        background: #f8d7da;
        padding: 10px;
        border-radius: 5px;
    }

    .text {
        flex-grow: 1;
        margin-left: 10px;
    }

    .details-btn {
        background-color: #1c1c3c;
    }
</style>
