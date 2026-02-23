
import Card from './components/Card'
import { ArrowDownUp, BadgeDollarSign, LayersPlus, Users } from 'lucide-react';
import LineBarAreaComposedChart from './components/LineBarAreaComposedChart';
import CreditsByBankChart from './components/CreditsByBankChart';


export default function DashboardPage() {
    return (
        <div>
            <div className='grid grid-cols-4 gap-3'>
                <Card
                    color='green'
                    title="Jami buyurtmalar"
                    value={201}
                    icon={<ArrowDownUp size={24} />}
                />
                <Card
                    color='purple'
                    title={"Yangi buyurtmalar"}
                    value={500}
                    icon={<LayersPlus />}
                />
                <Card
                    color='orange'
                    title={"Sotilganlar"}
                    value={400}
                    icon={<BadgeDollarSign />}
                />
                <Card
                    color='blue'
                    title={"Foydalanuvchilar"}
                    value={100}
                    icon={<Users />}
                />
            </div>
            <div className='grid grid-cols-[2fr_1fr]  gap-3 mt-5'>
                <div className='bg-white p-5 rounded-xl shadow'>
                    <LineBarAreaComposedChart/>
                </div>
                <div className='bg-white p-5 rounded-xl shadow'>
                    <CreditsByBankChart/>
                </div>
            </div>
        </div>
    )
}
