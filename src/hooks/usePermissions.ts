import { useAuth0 } from "@auth0/auth0-react";
import { useState, useEffect } from "react";

export const usePermissions = () => {
  const { user, getAccessTokenSilently } = useAuth0();
  const [permissions, setPermissions] = useState<string[]>([]);

  useEffect(() => {
    const fetchPermissions = async () => {
      if (!user) return;

      try {
        // Get the token with the configured audience and scope
        const token = await getAccessTokenSilently();
        
        // Decode the payload from the JWT token
        const payload = JSON.parse(atob(token.split(".")[1]));
        console.log("Token payload:", payload); // Debug log
        
        // Check for permissions in different possible locations
        const userPermissions = payload.permissions || payload.scope?.split(' ') || [];
        console.log("User permissions:", userPermissions); // Debug log
        
        setPermissions(userPermissions);
      } catch (err) {
        console.error("Error obteniendo permisos:", err);
        // Fallback: check user metadata for premium status
        if (user.app_metadata?.premium || user.user_metadata?.premium) {
          setPermissions(["read:premium_content"]);
        }
      }
    };

    fetchPermissions();
  }, [user, getAccessTokenSilently]);

  const hasPermission = (permission: string) => {
    return permissions.some(p => p.replace(/\s+/g, '') === permission.replace(/\s+/g, ''));
  };
  const hasPremiumAccess = () => hasPermission("read:premium_content") || hasPermission("read: premium_content");

  return { user, hasPermission, hasPremiumAccess };
};