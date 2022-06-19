  const fs = require('fs')
    require("../../../../connect/config")

  let _inventoryOrang = JSON.parse(fs.readFileSync('./worker/src/event/database/inventory.json'))
  const addInventori = (sender) => {
        const obj = {id: sender, }
         _inventoryOrang.push(obj)
        fs.writeFileSync('./worker/src/event/database/inventory.json', JSON.stringify(_inventoryOrang))
   }
  const cekInventoryAdaAtauGak = (sender) => {
            let status = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    status = true
                }
            })
            return status
        }
  module.exports = { cekInventoryAdaAtauGak, 
                     addInventori, 
                     _inventoryOrang
                    
                  }