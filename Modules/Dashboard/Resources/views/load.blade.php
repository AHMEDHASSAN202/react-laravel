<script>
    window.languages = @json($languages);
    window.visitor = @json($visitor);
    window.translations = @json($translations);
    window.keywords = {};
    Object.keys(window.translations).forEach(function(key) {
        window.keywords[key] = window.translations[key][window.visitor.language_code];
    });
</script>
