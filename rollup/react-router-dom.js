import {
  MemoryRouter, Navigate, Outlet, Route, Router, Routes,
  UNSAFE_LocationContext, UNSAFE_NavigationContext, UNSAFE_RouteContext,
  createRoutesFromChildren, generatePath, matchPath, matchRoutes,
  renderMatches, resolvePath, useHref, useInRouterContext,
  useLocation, useMatch, useNavigate, useNavigationType, useOutlet, useParams,
  useResolvedPath, useRoutes
} from 'react-router';
import {
  BrowserRouter, HashRouter, Link, NavLink, createSearchParams,
  useLinkClickHandler, useSearchParams
} from 'react-router-dom';

export {
  // react router
  MemoryRouter, Navigate, Outlet, Route, Router, Routes,
  UNSAFE_LocationContext, UNSAFE_NavigationContext, UNSAFE_RouteContext,
  createRoutesFromChildren, generatePath, matchPath, matchRoutes,
  renderMatches, resolvePath, useHref, useInRouterContext,
  useLocation, useMatch, useNavigate, useNavigationType, useOutlet, useParams,
  useResolvedPath, useRoutes,
  // react-router-dom
  BrowserRouter, HashRouter, Link, NavLink, createSearchParams,
  useLinkClickHandler, useSearchParams
}
