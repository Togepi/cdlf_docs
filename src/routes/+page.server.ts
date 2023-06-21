import { supabase } from '$lib/supabaseClient';

export async function load() {
    const { data } = await supabase.from('cdlf_docs').select();
    if (data) {
        const formateDate = data.map((item) => {
            const date = new Date(item.created_at);

            const formattedDate = date.toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' });
            return { ...item, created_at: formattedDate, year: date.getFullYear() };
            console.log(formattedDate);
        });

        return {
            cdlf: formateDate
        }
    }

    return {
        cdlf: []
    }
}