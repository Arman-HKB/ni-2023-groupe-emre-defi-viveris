var css = localStorage.getItem('viveris_def_theme_groupe_emre')
document.getElementById("pageColor").setAttribute('href', css);

function colorSwitch(css) {
    document.getElementById("pageColor").setAttribute('href', css);

    localStorage.setItem('A-viveris_def_theme_groupe_emre', css)
}