import ItemDetails from '../components/views/itemDetails'
import Test from '../components/views/Test'
import Inventory from '../components/views/inventory'

export const routes = [
    {
        path:'',
        component: Inventory
    },
    {
        path:'/item/:id',
        component: ItemDetails
    }
]