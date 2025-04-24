import { supabase } from './supabase';

// Create newsletter subscription in Supabase
export const subscribeToNewsletter = async (email) => {
  try {
    const { data, error } = await supabase
      .from('67f8434b14dfafddebe24d2a_newsletter')
      .insert({ email })
      .select();
    
    if (error) throw error;
    return { success: true, data };
  } catch (error) {
    console.error('Error subscribing to newsletter:', error);
    return { success: false, error: error.message || 'Failed to subscribe' };
  }
};

// Create membership signup in Supabase
export const signupForMembership = async (email, name, membershipType) => {
  try {
    const { data, error } = await supabase
      .from('67f8434b14dfafddebe24d2a_membership_signups')
      .insert({ 
        email,
        name,
        membership_type: membershipType,
        signup_date: new Date().toISOString()
      })
      .select();
    
    if (error) throw error;
    return { success: true, data };
  } catch (error) {
    console.error('Error signing up for membership:', error);
    return { success: false, error: error.message || 'Failed to sign up' };
  }
};