const EmailSignature = () => {
    return (
        <div className="mockup-code justify-content-start text-start">
            <pre data-prefix="$"><code>./christopher_bare.sh</code></pre>
            <pre data-prefix=">" className="text-warning"><code>sr. software engineer</code></pre>
            <pre data-prefix=">" className="text-warning">
                <code>email: <a className="text-accent"
                                href="mailto:christopherbare@outlook.com">christopherbare@outlook.com</a>
            </code>
            </pre>
            <pre data-prefix=">" className="text-warning"><code>phone: <span
                className="text-accent">(828) 781-4547</span> </code></pre>
            <a href="https://linkedin.com/in/christopherabare">
                <pre data-prefix=">" className="text-accent"><code>linkedin...</code></pre>
            </a>
            <a href="https://github.com/ChristopherBare">
                <pre data-prefix=">" className="text-info"><code>github...</code></pre>
            </a>
            <a href="https://christopherbare.github.io">
                <pre data-prefix=">" className="text-green-500"><code>website...</code></pre>
            </a>
            <pre data-prefix=">" className="text-warning"><code>installing...</code></pre>
            <pre data-prefix=">" className="text-success"><code>Done!</code></pre>
        </div>
    );
};

export default EmailSignature;
