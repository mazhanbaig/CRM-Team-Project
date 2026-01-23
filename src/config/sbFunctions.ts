import { supabase } from "./sbConfig";

const handleGoogleSignUp = async () => {
    const { data,error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
            redirectTo: `${window.location.origin}/dashboard`,
        },
    });
    return {data,error}
};


// Get current user session
const getCurrentUser = async () => {
    const {
        data: { session }
    } = await supabase.auth.getSession();
    return session?.user || null;
};

// Get user from Users table by email
const getUserData = async (email: string) => {
    const { data,error } = await supabase.from("Users").select("*").eq("email", email).maybeSingle();
    return {data,error}
};


const logout = () => {
    return new Promise(async (resolve, reject) => {
        const { error } = await supabase.auth.signOut();
        if (error) {
            reject(error)
        } else {
            resolve('')
        }
    })
};

const insertData = async (table: string, dataToSave: any) => {
    const { data, error } = await supabase.from(table).insert(dataToSave);
    return {data,error}
};


const getData = async(table: string, filters?: any) => {
      let query = supabase.from(table).select('*');

      if (filters) {
      Object.keys(filters).forEach(key => {
        query = query.eq(key, filters[key])
      });
      }

      const { data, error } = await query;
      return {data,error}

            
};



const updateData = async (table: string, updates: any, filter: any) => {
        let query = supabase.from(table).update(updates);

        // Apply filters
        for (const key in filter) {
            if (filter[key] !== undefined && filter[key] !== null) {
                query = query.eq(key, filter[key]);
            }
        }

        const { data, error } = await query;
        return {data,error}

};

const deleteData = async (table: string, filter: any) => {
        let query = supabase.from(table).delete();

        // Apply filters
        for (const key in filter) {
            if (filter[key] !== undefined && filter[key] !== null) {
                query = query.eq(key, filter[key]);
            }
        }

        const { data, error } = await query;
        return {data,error}

};


export { handleGoogleSignUp, logout, insertData, getData, updateData, deleteData,getCurrentUser,getUserData }

