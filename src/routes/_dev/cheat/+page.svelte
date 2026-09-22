<script lang="ts">
    let scriptNum = $state(1);
    let patch: string | undefined = $state();

    function onClick() {
        patch = `gametitle=キノの旅 -the Beautiful World-

[Load script${scriptNum}]
patch=0,EE,0014d4dc,byte,${scriptNum.toString(16)}`;
    }
</script>

<h1>Cheat Generator</h1>

<p>
    Load script: <input type="number" bind:value={scriptNum} min="1" max="255">
</p>

<p>
    <button onclick={onClick}>Generate</button>
</p>

<textarea readonly>{patch}</textarea>

<h2>How to Use</h2>

<ol>
    <li>Launch the game in PCSX2. Wait until you get past the PS2 startup intro.</li>
    <li>
        In the game window, go to Tools &rarr; Edit Cheats. It may ask you to create a file, choose Yes.
        The file will be opened in your default text editor.
    </li>
    <li>Replace the entire file's content with the output above. Save and close the text editor.</li>
    <li>Go to Settings &rarr; Game Properties. Open the Cheats section.</li>
    <li>Click on Enable Cheats. You may need to press it twice. The list below should be activated (not grayed out).</li>
    <li>Enable the cheat corresponding to the script you want to load (e.g. Load script24). Disable all other cheats.</li>
    <li>Close the Game Properties window, and reset the game.</li>
    <li>On the next boot, the requested script should load immediately, right after the PS2 startup.</li>
</ol>

<style>
    textarea {
        width: 400px;
        height: 200px;
        max-width: 100%;
        resize: none;
    }
</style>