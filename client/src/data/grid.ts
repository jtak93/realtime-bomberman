const emptyTile = {
    bgColor: "#228B22"
}

const wallTile = {
    bgColor: "#D3D3D3"
}



const gridData = {
    grid: [
        [wallTile, wallTile, wallTile, wallTile, wallTile, wallTile, wallTile, wallTile],
        [wallTile, emptyTile, emptyTile, emptyTile, wallTile, emptyTile, emptyTile, wallTile],
        [wallTile, wallTile, wallTile, wallTile, wallTile, wallTile, wallTile, wallTile],
    ]
}

export default gridData;