
import React, { createContext, useState, useEffect, useContext } from 'react';
import { supabase } from '../lib/supabase';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get session from supabase
    const fetchSession = async () => {
      try {
        const { data: { user } } = await supabase.auth.getUser();
        setUser(user);
      } catch (error) {
        console.error('Error fetching user:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSession();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user ?? null);
        setLoading(false);
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  // Sign in with OTP (one-time password)
  const signInWithOtp = async (email) => {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signInWithOtp({
        email,
      });
      
      if (error) throw error;
      return { success: true };
    } catch (error) {
      console.error('Error sending OTP:', error);
      return { success: false, error: error.message };
    } finally {
      setLoading(false);
    }
  };

  // Verify OTP code
  const verifyOtp = async (email, token) => {
    try {
      setLoading(true);
      const { error } = await supabase.auth.verifyOtp({
        email,
        token,
        type: 'email'
      });
      
      if (error) throw error;
      return { success: true };
    } catch (error) {
      console.error('Error verifying OTP:', error);
      return { success: false, error: error.message };
    } finally {
      setLoading(false);
    }
  };

  // Sign out
  const signOut = async () => {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      return { success: true };
    } catch (error) {
      console.error('Error signing out:', error);
      return { success: false, error: error.message };
    } finally {
      setLoading(false);
    }
  };

  const value = {
    user,
    loading,
    signInWithOtp,
    verifyOtp,
    signOut,
    isAuthenticated: !!user
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
