import { authenticator } from "~/services/auth.server";

interface AuthUser {
    accessToken: string;
}

/**
 * Makes an authenticated API call to the specified endpoint
 * @param request The incoming request object
 * @param endpoint The API endpoint path (e.g. "/products")
 * @returns The JSON response from the API
 * @throws {Error} If user is not authenticated or API call fails
 */
export async function callApi(request: Request, endpoint: string) {
    const user = await authenticator.isAuthenticated(request) as AuthUser;
    if (!user) throw new Error("Not authenticated");

    const response = await fetch(`http://localhost:8080/api${endpoint}`, {
        headers: {
            Authorization: `Bearer ${user.accessToken}`,
        },
    });

    if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
    }

    return response.json();
}
