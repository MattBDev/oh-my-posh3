package main

type node struct {
	props       *properties
	env         environmentInfo
	nodeVersion string
}

func (n *node) string() string {
	if n.props.getBool(DisplayVersion, true) {
		return n.nodeVersion
	}
	return ""
}

func (n *node) init(props *properties, env environmentInfo) {
	n.props = props
	n.env = env
}

func (n *node) enabled() bool {
	if !n.env.hasFiles("*.js") && !n.env.hasFiles("*.ts") {
		return false
	}
	if !n.env.hasCommand("node") {
		return false
	}
	n.nodeVersion, _ = n.env.runCommand("node", "--version")
	return true
}
