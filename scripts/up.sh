brew_install() {
    echo "\n⏳ Installing $1"
    if brew list $1 &>/dev/null; then
        echo "✅ ${1} is already installed"
    else
        echo "\nInstalling $1"
        brew install $1 && echo "✅ $1 is installed"
    fi
}

brew_install "hivemind";
echo "\n⏳ Npm install"
npm install;
echo "\n✅ Npm install is done"

echo "\nStarting hivemind"
hivemind


